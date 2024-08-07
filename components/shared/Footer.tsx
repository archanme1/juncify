import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Footer = () => {
  return (
    <div>
      <footer className="border-t">
        <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
          <Link href="/" className="flex gap-1 items-center">
            <Image
              src="/assets/images/logo.svg"
              alt="juncify logo"
              width={90}
              height={24}
            />
            <p className="p-regular-16  text-gray-600">©️2024</p>
            <p className="p-medium-14 text-gray-600">All Right Reserved.</p>
          </Link>

          <div className="sm:flex-center  flex-center gap-3 text-gray-600">
            <Link href="/contact">
              <p className="p-medium-12  text-gray-600">Contact Us</p>
            </Link>
            <Link href="/privacy">
              <p className="p-medium-12  text-gray-600">Privacy Policy</p>
            </Link>
            <Link href="/terms">
              <p className="p-medium-12  text-gray-600">Terms & Conditions</p>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    src="/assets/images/language.png"
                    alt="juncify logo"
                    width={22}
                    height={22}
                    className="cursor-pointer"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>English</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* <Link href="/contact">
              <Image
                src="/assets/images/message.png"
                alt="juncify logo"
                width={22}
                height={22}
                className="cursor-pointer"
              />
            </Link> */}
            <a href="mailto:juncify@gmail.com">
              <Image
                src="/assets/images/google.png"
                alt="juncify logo"
                width={22}
                height={22}
                className="cursor-pointer"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
