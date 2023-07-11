import React from 'react'
import Image from "next/image";
import Link from "next/link";

interface MenuItemsProps {
    title: string;
    src: string;
    link?: string;
  active?: boolean;
  name?: string;
}



export default function menu_items({title, link = '/#', src, active, name}: MenuItemsProps) {

    const className = `item mb-30 ${active? 'active' : ''}`

  return (
    <div className={className}>
      <Image
        className="icon me-3"
        src={src}
        height={25}
        width={25}
        alt=""
      />
      <p className="item-title m-0">
        <Link href={link} className="text-lg text-decoration-none">
          {title}
        </Link>
      </p>
    </div>
  );
}
