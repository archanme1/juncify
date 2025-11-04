import Link from "next/link";
import Comments from "@/components/Comments";
import Post from "@/components/Post";
import { ArrowLeft } from "lucide-react";

const StatusPage = () => {
  return (
    <div className="">
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-white">
        <Link href="/managers/junction" className="cursor-pointer">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <h1 className="font-bold text-lg">Post</h1>
      </div>
      <Post />
      <Comments />
    </div>
  );
};

export default StatusPage;
