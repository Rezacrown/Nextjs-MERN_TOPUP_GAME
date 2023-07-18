import React from "react";
import UserImage from './user-image';
import Menus from './menus';
import SidebarFooter from './footer';

interface SidebarProps {
  activeMenu: 'overview' | 'transactions' | 'settings' | 'messages' | 'card' | 'rewards';
  user?: any
}


export default function Sidebar({activeMenu, user}: SidebarProps,) {

  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <UserImage {...user}/>
        <Menus actived={activeMenu}  />
        <SidebarFooter/>
      </div>
    </section>
  );
}
