import { IconCategory, IconPackage, IconUser } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const SideNav = () => {
  const menu = [
    { name: "Customer", link: "/customer", icon: <IconUser/> },
    { name: "Product", link: "/product", icon: <IconPackage/> },
    { name: "Category", link: "/category", icon: <IconCategory/> },
  ];
  return (
    <div className="flex flex-col">
      <ul className="menu bg-base-200 rounded-box w-56 h-screen">
        {menu.map((item, idx) => (
          <li key={idx}>
            <Link href={item.link} className="flex">{item.icon}{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
