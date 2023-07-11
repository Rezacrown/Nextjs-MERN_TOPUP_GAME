import React from "react";
import UserImage from './user-image';
import Menus from './menus';
import SidebarFooter from './footer';

interface SidebarProps {
  activeMenu: 'overview' | 'transactions' | 'settings' | 'messages' | 'card' | 'rewards'
}


export default function Sidebar({activeMenu}: SidebarProps) {

  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <UserImage />
        <Menus actived={activeMenu} />
        <SidebarFooter/>
      </div>
    </section>
  );
}
