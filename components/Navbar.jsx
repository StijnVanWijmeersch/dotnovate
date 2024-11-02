import Link from "next/link";
import Image from "next/image";
import { nav_links } from "@/constants";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center container relative z-50 py-5">
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={118}
          height={29}
          className="object-contain"
        />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {nav_links.map(({ href, key, label }) => (
          <li
            key={key}
            className="text-base font-normal text-grey-100 flex justify-center items-center cursor-pointer pb-1.5 transition-all hover:font-semibold"
          >
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>

      <Image
        src="/images/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};
export default Navbar;
