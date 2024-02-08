import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="border-t">
        <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
          <Link href="/">
            {/* change logo later on  */}
            <p className="p-semibold-16 font-bold text-red-500 ">Juncify</p>
          </Link>

          <div className="sm:flex-center  flex-center gap-3 text-gray-500">
            <Link href="/contact">
              <p className="p-medium-12  text-gray-500">Contact US</p>
            </Link>
            <Link href="/privacy">
              <p className="p-medium-12  text-gray-500">Privacy Policy</p>
            </Link>
            <Link href="/terms">
              <p className="p-medium-12  text-gray-500">Terms & Conditions</p>
            </Link>
          </div>

          <p>2024 ©Juncify. All Rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
