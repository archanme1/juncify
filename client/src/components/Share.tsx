"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useCreatePostMutation, useGetAuthUserQuery } from "@/state/api";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { PostFormData, postSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "./ui/form";
import { CustomFormField } from "./FormField";
import Link from "next/link";

const Share = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const [addPost, { isLoading }] = useCreatePostMutation();

  const userId = authUser?.userInfo?.cognitoId as string | undefined;
  const loggedInName = authUser?.userInfo?.name as string | undefined;
  const authUserRole = authUser?.userRole as string | undefined;

  const avatarInitial = loggedInName?.charAt(0)?.toUpperCase() ?? "?";

  const form = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
    defaultValues: { desc: "" },
    mode: "onSubmit",
  });

  const onSubmit = async (data: PostFormData) => {
    if (!userId) return;

    console.log("From client: ", data.desc);
    console.log("From client id: ", userId);

    try {
      await addPost({
        userId,
        desc: data.desc.trim(),
      }).unwrap();

      form.reset({ desc: "" });
    } catch (error) {
      console.error("Post creation failed:", error);
    }
  };

  return (
    <div className="p-2 flex gap-4">
      {/* Avatar */}
      <Link href={`/${authUserRole}s/junction/${loggedInName}`}>
        <div className="relative mt-5 w-10 h-10 rounded-full overflow-hidden">
          <Avatar>
            <AvatarImage />
            <AvatarFallback className="bg-primary-600 text-white">
              {avatarInitial}
            </AvatarFallback>
          </Avatar>
        </div>
      </Link>

      {/* Post form */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex-1 flex flex-col gap-2"
        >
          <CustomFormField
            name="desc"
            label=""
            type="textarea"
            placeholder="Drop something for the Juncify community..."
            inputClassName="bg-white !min-h-[22px] resize-none"
          />

          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={isLoading || !userId}
              className="cursor-pointer bg-secondary-600 text-primary-50 disabled:opacity-60"
            >
              {isLoading ? "Posting…" : "Post"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Share;
