'use client';

import Link from "next/link";

const NavLink = ({ href, name, className, ...props }) => {
  return (
    <Link
      href={href}
      className={className}
      {...props}
    >
      {name}
    </Link>
  );
};

export default NavLink;
