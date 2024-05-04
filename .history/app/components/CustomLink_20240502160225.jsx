import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = ({ path, children }) => {
  const pathname = usePathname();
  const isActive = pathname === path;
  return <Link className={isActive ? "active" : ""}></Link>;
};

export default CustomLink;
