import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/images/logo.png";
import CustomLink from "./CustomLink";
import SignInOut from "./auth/SignInOut";
const Navbar = () => {
  return (
    <nav>
      <div className="container flex justify-between py-6">
        <Link href="/">
          <Image src={logo} alt="logo" width={150} height={10} />
        </Link>

        <ul className="flex gap-4 text-sm text-gray-500">
          <li className="py-2">
            <CustomLink path="/">Home</CustomLink>
          </li>

          <li className="py-2">
            <CustomLink path="/recipe">Recipe</CustomLink>
          </li>

          <li className="py-2">
            <CustomLink path="/about">About us</CustomLink>
          </li>

          <SignInOut />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
