import Image from "next/image";
import Divider from "../divider/Divider";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-5 max-w-[1050px] mx-auto xl:px-0">
      <Link href="/">
        <Image src="/Rutube.svg" width={150} height={40} alt="Rutube logo" />
      </Link>
    </nav>
  );
};

export default Navbar;
