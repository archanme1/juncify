"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { contactFormSchema } from "@/lib/validator";
import { contactDefaultValues } from "@/constants";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

// const EMAILJS_GOOGLE_SERVICE_URI = process.env.EMAILJS_GOOGLE_SERVICE_KEY;
// const EMAILJS_TEMPLATE_URI = process.env.EMAILJS_TEMPLATE_KEY
// const EMAILJS_PUBLIC_URI = process.env.EMAILJS_PUBLIC_KEY

const Contact = () => {
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const initialValues = contactDefaultValues;

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: initialValues,
  });

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    try {
      const formElement = document.createElement("form");

      // Populate the form with values as  need form as element to be passed.
      Object.entries(values).forEach(([key, value]) => {
        const input = document.createElement("input");
        input.name = key;
        input.value = value;
        formElement.appendChild(input);
      });

      emailjs
        .sendForm(
          process.env.EMAILJS_GOOGLE_SERVICE_KEY || "service_k2yd0gc",
          process.env.EMAILJS_TEMPLATE_KEY || "template_8qji4hs",
          formElement,
          process.env.EMAILJS_PUBLIC_KEY || "p3g2QAdpgzuNCK64L"
        )
        .then(
          (result) => {
            result.text === "OK" && setIsSuccess(true);
            form.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5  md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className="h3-bold text-center sm:text-left">Contact Us</h3>
        </div>
      </section>
      <div className="wrapper my-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <div className="flex flex-col gap-5 md:flex-row">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="Username"
                        {...field}
                        className="input-field"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        placeholder="Email"
                        {...field}
                        className="input-field"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col gap-5 md:flex-row">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl className="h-32">
                      <Textarea
                        placeholder="Message..."
                        {...field}
                        className="textarea rounded-2xl"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={form.formState.isSubmitting}
              className="button col-span-2 w-full"
            >
              {form.formState.isSubmitting ? "Submitting..." : "Submit"}
            </Button>
            {isSuccess && (
              <p className="p-medium-12 text-blue-500 text-center">
                Your Message has been sent. We will get back to you soon
              </p>
            )}
          </form>
        </Form>
      </div>
    </>
  );
};

export default Contact;
