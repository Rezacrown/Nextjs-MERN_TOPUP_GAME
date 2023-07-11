import React from "react";
import Image from "next/image";
import Link from "next/link";
import Menu_items from "./menu-items";

interface MenuSidebar_props {
  actived:
    | "overview"
    | "transactions"
    | "settings"
    | "messages"
    | "card"
    | "rewards";
}

export default function menus({actived}: MenuSidebar_props) {
  return (
    <div className="menus">
      <Menu_items
        src="/assets/icon/sidebar/icon-1.svg"
        title="Overview"
        link="/member"
        active={actived === "overview"}
      />
      <Menu_items
        src="/assets/icon/sidebar/icon-2.svg"
        title="Transactions"
        link="/member/transactions"
        active={actived === "transactions"}
      />
      <Menu_items
        src="/assets/icon/sidebar/icon-3.svg"
        title="Messages"
        link="/member"
        active={actived === "messages"}
      />
      <Menu_items
        src="/assets/icon/sidebar/icon-4.svg"
        title="Card"
        link="/member"
        active={actived === "card"}
      />
      <Menu_items
        src="/assets/icon/sidebar/icon-5.svg"
        title="Rewards"
        link="/member"
        active={actived === "rewards"}
      />
      <Menu_items
        src="/assets/icon/sidebar/icon-6.svg"
        title="Settings"
        link="/member/edit-profile"
        active={actived === "settings"}
      />
      <Menu_items
        src="/assets/icon/sidebar/icon-7.svg"
        title="Log Out"
        link="/signin"
      />
    </div>
  );
}
