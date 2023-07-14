import React, {useState} from "react";

import TextInput from "@/components/atoms/TextInput";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";

export default function SignUp_Form() {

  const router = useRouter()

  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })


  const handleChange = (e: any) => {
    setData({...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e?: any) => {
    e.preventDefault()
    // console.log(data)
    localStorage.setItem('signup-form', JSON.stringify(data))
    router.push({query: {photo: ''}})
  }


  return (
    <form onSubmit={handleSubmit}>
        {/* brand image */}
      <div className="pb-50">
        <Link className="navbar-brand" href="/">
          <Image
            src={"/assets/icon/icon.svg"}
            height={60}
            width={60}
            alt="logo"
          />
        </Link>
      </div>
      <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
      <p className="text-lg color-palette-1 m-0">
        Daftar dan bergabung dengan kami
      </p>
      <div className="pt-50">
        <TextInput
          type="text"
          name="name"
          placeHolder="Enter your name"
          label="Name"
          required
          handleChange={(e) => handleChange(e)}
        />
      </div>
      <div className="pt-30">
        <TextInput
          type="email"
          name="email"
          placeHolder="Enter your email address"
          label="Email"
          required
          handleChange={(e) => handleChange(e)}
        />
      </div>
      <div className="pt-30">
        <TextInput
          type="password"
          name="password"
          placeHolder="Your password"
          label="Password"
          required
          minLength={8}
          handleChange={(e) => handleChange(e)}
        />
      </div>

      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button
          className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
          type="submit"
        >
          Continue
        </button>
        <Link
          className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill"
          href="/signin"
          role="button"
        >
          Sign In
        </Link>
      </div>
    </form>
  );
}
