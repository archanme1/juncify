import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return <div>
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          {/* change logo later on  */}
          <p className='text-2xl font-bold'>Juncify</p>
        </Link>

        <p>2023 ©Juncify. All Rights reserved.</p>
      </div>
    </footer>
  </div>;
};

export default Footer;
