import React, { useState } from "react";
import Image from "next/image";
import { ProfileProps } from "@/interface/profile";
import { config } from "@/config";

interface editPicture {
  avatar: string | object | null;
  previewImg?: string;
  handleChangeImage?: (e: any) => any;
}

export default function EditPhotoInput({
  avatar,
  handleChangeImage,
  previewImg = "/assets/icon/edit-profile/avatar-2.svg",
}: editPicture) {

  return (
    <div className="photo d-flex">
      {/* <div className="position-relative me-20">
        
        <Image
          src={
            `${config.URL}/${avatar}` ||
            "/assets/icon/edit-profile/avatar-2.svg"
          }
          width={90}
          height={90}
          className="avatar img-fluid rounded-circle"
          alt="avatar"
        />


        <div className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
          <Image
            src="/assets/icon/edit-profile/avatar-1.svg"
            width={24}
            height={24}
            alt=""
          />
        </div>

        
      </div> */}
      <div className="image-upload">
        <label htmlFor="avatar">
          {previewImg ? (
            <Image
              src={previewImg}
              className="avatar img-fluid rounded-circle"
              height={90}
              width={90}
              alt="new avatar"
            />
          ) : (
            <Image
              src={
                `${config.URL}/${avatar}` ||
                "/assets/icon/edit-profile/avatar-2.svg"
              }
              width={90}
              height={90}
              className="avatar img-fluid rounded-circle"
              alt="avatar"
            />
          )}
        </label>
        <input
          id="avatar"
          type="file"
          name="avatar"
          accept="image/png, image/jpeg"
          onChange={handleChangeImage}
        />
      </div>
    </div>
  );
}
