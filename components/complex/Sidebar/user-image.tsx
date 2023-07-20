import Image from 'next/image';
import React from 'react'
import { config } from '@/config';

interface userData {
  name: string;
  avatar: string;
  email: string;
  username: string;
}

export default function user_image(user: userData) {
  return (
    <div className="user text-center pb-50 pe-30">
      <Image
        src={`${config.URL}/${user?.avatar}` || "/assets/img/avatar-1.png"}
        width="80"
        height="40"
        className="img-fluid mb-20"
        style={{borderRadius: '100%'}}
        alt=""
      />
      <h2 className="fw-bold text-xl color-palette-1 m-0">{user?.name}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
}
