import React from "react";
import Image from "next/image";

export default function EditPhotoInput() {
  return (
    <div className="photo d-flex">
      <div className="position-relative me-20">
        <Image
          src="/assets/img/avatar-1.png"
          width={90}
          height={90}
          className="avatar img-fluid"
          alt=""
        />
        <div className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
          <Image
            src="/assets/icon/edit-profile/avatar-1.svg"
            width={24}
            height={24}
            alt=""
          />
        </div>
      </div>
      <div className="image-upload">
        <label>
          <Image
            src="/assets/icon/edit-profile/avatar-2.svg"
            height={90}
            width={90}
            alt=""
          />
        </label>
        <input
          id="avatar"
          type="file"
          name="avatar"
          accept="image/png, image/jpeg"
        />
      </div>
    </div>
  );
}
