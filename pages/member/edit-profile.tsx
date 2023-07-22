import React, { useState, useEffect, useCallback } from "react";
import TextInput from "@/components/atoms/TextInput";
import Sidebar from "@/components/complex/Sidebar";
import EditPhotoInput from "@/components/complex/Edit-photo-Input";
import { getDataProfile, updateProfile } from "@/services/Dashboard";
import { ProfileProps } from "@/interface/profile";
import { useRouter } from 'next/router'

import { checkServerCookie } from "@/services/Auth";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";




export default function edit_Profile() {
  
  const router = useRouter()
  // state
  const [data, SetData] = useState<ProfileProps>({
    id: '',
    email: '',
    phoneNumber: 0,
    name: "",
    avatar: '',
  });
  const [previewImage, setPreviewImage] = useState("")
  const [newImage, setNewImage] = useState()

  // useCallback
  const serveData = useCallback(async () => {
    await getDataProfile().then((res) => {
      SetData(res);
    });
  }, [newImage, setNewImage, previewImage, setPreviewImage, data]);


  useEffect(() => {
    serveData()
  }, [])

  // handle functions
  const handleChange = (e: any) => {
    SetData({ ...data, [e.target.name]: e.target.value })
  }

  const handleChangeImage = (e: any) => {
    const Image = e.target.files[0]
    const urlImg: string = URL.createObjectURL(Image);
    setPreviewImage(urlImg) 
    setNewImage(Image)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    // init payload FormData
    const payload = new FormData()
    // append payload
    payload.append('avatar', newImage || '')
    payload.append('name', data.name)
    payload.append('phoneNumber', data.phoneNumber.toString())
    // payload.append('email', data.email)

    await updateProfile(payload).then((res)=> {
      router.push('/signin')
    })
  }



  return (
    <>
      <section className="edit-profile overflow-auto">
        <Sidebar user={""} activeMenu="settings" />
        {/* main */}
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
            <div className="bg-card pt-30 ps-30 pe-30 pb-30">
              {/* form */}
              <form onSubmit={handleSubmit}>
                {/* photo */}
                <EditPhotoInput
                  previewImg={previewImage}
                  avatar={data?.avatar}
                  handleChangeImage={handleChangeImage}
                />
                {/* input */}
                <div className="pt-50">
                  <TextInput
                    type="text"
                    name="name"
                    placeHolder="Enter your name"
                    label="Full Name"
                    value={data.name}
                    handleChange={handleChange}
                  />
                </div>
                <div className="pt-30">
                  <TextInput
                    type="tel"
                    name="phoneNumber"
                    placeHolder="Enter your phone number"
                    label="Phone"
                    value={data.phoneNumber}
                    handleChange={handleChange}
                  />
                </div>
                <div className="pt-30">
                  <TextInput
                    type="email"
                    name="email"
                    placeHolder="Enter your email address"
                    label="Email Address"
                    value={data.email}
                    handleChange={handleChange}
                    disabled
                  />
                </div>
                {/* btn */}
                <div className="button-group d-flex flex-column pt-50">
                  <button
                    type="submit"
                    className="btn btn-save fw-medium text-lg text-white rounded-pill"
                    role="button"
                  >
                    Save My Profile
                  </button>
                </div>
              </form>
              {/*  */}
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

// SSR
export const getServerSideProps: GetServerSideProps = async ({
  req,
}): Promise<any> => {
  const { authToken } = req.cookies;

  if (!authToken) {
    return {
      redirect: {
        destination: "/signin",
      },
    };
  }

  const user = checkServerCookie(authToken, "base64");

  return {
    props: {
      user,
    },
  };
};
