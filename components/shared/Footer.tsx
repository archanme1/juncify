import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="border-t">
        <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
          <Link href="/" className="flex gap-1 items-center">
            {/* change logo later on  */}
            <p className="p-semibold-16 font-bold text-red-500 ">Juncify</p>
            <p className="p-regular-14  text-gray-600">©️2024</p>
            <p className="p-regular-14  text-gray-600">All Right Reserved.</p>
          </Link>

          <div className="sm:flex-center  flex-center gap-3 text-gray-600">
            <Link href="/contact">
              <p className="p-regular-14  text-gray-600">Contact US</p>
            </Link>
            <Link href="/privacy">
              <p className="p-regular-14  text-gray-600">Privacy Policy</p>
            </Link>
            <Link href="/terms">
              <p className="p-regular-14  text-gray-600">Terms & Conditions</p>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
