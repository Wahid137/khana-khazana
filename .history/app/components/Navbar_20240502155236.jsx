import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/images/logo.png";
const Navbar = () => {
  return (
    <nav>
      <div className="container flex justify-between py-6">
        <Link href="index.html">
          <Image src={logo} alt="logo" width={150} height={10} />
        </Link>

        <ul className="flex gap-4 text-sm text-gray-500">
          <li className="py-2 active">
            <a href="./index.html">Home</a>
          </li>

          <li className="py-2">
            <a href="./index.html">Recipe</a>
          </li>

          <li className="py-2">
            <a href="./index.html">About us</a>
          </li>

          <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
            <a href="./login.html">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
