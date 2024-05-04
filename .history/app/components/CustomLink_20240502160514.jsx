"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = ({ path, children }) => {
  const pathname = usePathname();
  const isActive = pathname === path;
  return (
    <Link className={isActive ? "active" : ""} href={path}>
      {children}
    </Link>
  );
};

export default CustomLink;
