"use client";

import { useMemo } from "react";
import Post from "./Post";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useGetAuthUserQuery, useAddCommentMutation } from "@/state/api";
import { CommentType } from "@/types/prismaTypes";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "./ui/form";
import { CustomFormField } from "./FormField";
import { CommentFormData, commentSchema } from "@/lib/schemas";

interface CommentsProps {
  postId: string;
  comments: CommentType[];
  username?: string;
}

const Comments = ({ postId, comments }: CommentsProps) => {
  const { data: authUser } = useGetAuthUserQuery();
  const [addComment, { isLoading }] = useAddCommentMutation();

  const userId = authUser?.userInfo?.cognitoId as string | undefined;
  const loggedInName = authUser?.userInfo?.name as string | undefined;

  const avatarInitial = useMemo(
    () => loggedInName?.charAt(0)?.toUpperCase() ?? "?",
    [loggedInName]
  );

  const form = useForm<CommentFormData>({
    resolver: zodResolver(commentSchema),
    defaultValues: { desc: "" },
    mode: "onSubmit",
  });

  const onSubmit = async (data: CommentFormData) => {
    if (!userId) return;
    console.log("Comment Data: ", userId, postId, data.desc.trim());

    try {
      await addComment({
        userId,
        postId,
        desc: data.desc.trim(),
      }).unwrap();
      form.reset({ desc: "" });
      // No manual refetch necessary—tag invalidation will refetch the post
    } catch (e) {
      // optionally show a toast
      console.error(e);
    }
  };

  return (
    <div className="">
      {/* COMMENT FORM */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex items-start gap-4 p-4"
        >
          <div className="relative mt-5 w-10 h-10 rounded-full overflow-hidden">
            <Avatar>
              <AvatarImage />
              <AvatarFallback className="bg-primary-600 text-white">
                {avatarInitial}
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="flex-1">
            <CustomFormField
              name="desc"
              label=""
              type="textarea"
              placeholder="Write a reply…"
              inputClassName="bg-white !min-h-[22px] resize-none"
            />

            <div className="mt-3 flex justify-end">
              <Button
                type="submit"
                disabled={isLoading || !userId}
                className="cursor-pointer bg-secondary-500 text-primary-50 disabled:opacity-60"
              >
                {isLoading ? "Posting…" : "Reply"}
              </Button>
            </div>
          </div>
        </form>
      </Form>

      {/* COMMENTS LIST */}
      <div className="px-4">
        {comments?.length > 0 ? (
          comments.map((comment) => (
            <Post key={comment.id} post={comment} type="comment" />
          ))
        ) : (
          <Badge variant="destructive">No Comments Yet!!</Badge>
        )}
      </div>
    </div>
  );
};

export default Comments;
