import React from "react";
import Link from "next/link";

type Props = {};

function DropDownPages({}: Props) {
  return (
    <div className="w-64 px-4 py-3 text-gray-500">
      <ul className="space-y-2">
        <li className="flex justify-between hover:bg-gray-200 hover:text-black p-2 ">
          <Link href="/">Home</Link>
        </li>
        <li className="flex justify-between hover:bg-gray-200 hover:text-black p-2 ">
          <Link href="/shop">Shop</Link>
        </li>
        <li className="flex justify-between hover:bg-gray-200 hover:text-black p-2 ">
          <Link href="/products">Products</Link>
        </li>
        <li className="flex justify-between hover:bg-gray-200 hover:text-black p-2 ">
          <Link href="/pages">Pages</Link>
        </li>
        <li className="flex justify-between hover:bg-gray-200 hover:text-black p-2 rounded">
          <Link href="/foxkit">FoxKit</Link>
        </li>
      </ul>
    </div>
  );
}

export default DropDownPages;
