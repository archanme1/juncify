"use client";

import React, { useEffect } from "react";
import { Amplify } from "aws-amplify";
import {
  Authenticator,
  Button,
  Heading,
  Radio,
  RadioGroupField,
  useAuthenticator,
  View,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useRouter, usePathname } from "next/navigation";
import { awsExports, formFields } from "@/lib/awsexports";
import Image from "next/image";

Amplify.configure(awsExports);

const components = {
  SignIn: {
    Header() {
      return (
        <View className="mt-4 mb-7">
          <div className="flex items-center gap-2">
            <Image
              src="/logo1.png"
              alt="Juncify Logo"
              width={32}
              height={32}
              className="w-6 h-6 scale-100"
            />
            <Heading level={3} className="!text-2xl !font-bold">
              JUNC
              <span className="text-secondary-500  font-bold ">IFY</span>
            </Heading>
          </div>
          <p className="text-muted-foreground mt-2">
            <span className="font-bold">Welcome!</span> Please sign in to
            continue
          </p>
        </View>
      );
    },

    Footer() {
      const { toSignUp, toForgotPassword } = useAuthenticator();
      return (
        <View className="text-center mt-4">
          <p className="text-muted-foreground mb-2">
            Don&apos;t have an account?{" "}
            <button
              onClick={toSignUp}
              className="text-secondary-500 cursor-pointer hover:underline bg-transparent border-none p-0"
            >
              Sign up here
            </button>
          </p>
          <Button
            fontWeight="normal"
            onClick={toForgotPassword}
            size="small"
            variation="link"
            // disabled
          >
            Reset Password
          </Button>
        </View>
      );
    },
  },
  SignUp: {
    Header() {
      return (
        <View className="mt-4 mb-7">
          <div className="flex items-center gap-2">
            <Image
              src="/logo1.png"
              alt="Juncify Logo"
              width={32}
              height={32}
              className="w-6 h-6 scale-100"
            />
            <Heading level={3} className="!text-2xl !font-bold">
              JUNC
              <span className="text-secondary-700 font-bold ">IFY</span>
            </Heading>
          </div>
          <p className="text-muted-foreground mt-2">
            <span className="font-bold">Welcome!</span> Please sign up to
            continue
          </p>
        </View>
      );
    },
    FormFields() {
      const { validationErrors } = useAuthenticator();

      return (
        <>
          {/* keep everything from formFields -> Authenticator.SignUp.FormFields   */}
          <Authenticator.SignUp.FormFields />
          {/* Custom Add  */}
          <RadioGroupField
            legend="Role"
            name="custom:role"
            errorMessage={validationErrors?.["custom:role"]}
            hasError={!!validationErrors?.["custom:role"]}
            isRequired
          >
            <Radio value="customer">User</Radio>
            <Radio value="manager">Manager</Radio>
          </RadioGroupField>
        </>
      );
    },

    Footer() {
      const { toSignIn } = useAuthenticator();
      return (
        <View className="text-center mt-4 ">
          <p className="text-muted-foreground">
            Already have an account?{" "}
            <button
              onClick={toSignIn}
              className="text-secondary-500 cursor-pointer hover:underline bg-transparent border-none p-0"
            >
              Sign in
            </button>
          </p>
        </View>
      );
    },
  },
};

const Auth = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuthenticator((context) => [context.user]);
  // console.log("user from cognito: ", user);

  const router = useRouter();
  const pathname = usePathname();

  const isAuthPage = pathname.match(/^\/(signin|signup)$/);
  const isDashboardPage =
    pathname.startsWith("/manager") || pathname.startsWith("/customers");

  // Redirect authenticated users away from auth pages
  useEffect(() => {
    if (user && isAuthPage) {
      router.push("/");
    }
  }, [user, isAuthPage, router]);

  // Allow access to public pages without authentication
  if (!isAuthPage && !isDashboardPage) {
    return <>{children}</>;
  }

  return (
    <div className="h-full">
      <Authenticator
        initialState={pathname.includes("signup") ? "signUp" : "signIn"}
        components={components}
        formFields={formFields}
      >
        {() => <>{children}</>}
      </Authenticator>
    </div>
  );
};

export default Auth;
