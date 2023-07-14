import TextInput from "@/components/atoms/TextInput";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import React, {useState, useEffect, useCallback} from "react";

import {handleSignin} from '@/services/Auth'
import { SuccesNotif } from "@/utils/notif";



export default function SignIn_Form() {
  const router = useRouter()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })


  const handleChange = (e: any) => {
    setForm({...form, [e.target.name]: e.target.value })
  }


  const handleSubmit = async (e: any) => {
    e.preventDefault()
    await handleSignin(form).then(()=> {
      router.push('/')
      SuccesNotif('Selamat Anda Berhasil Login')  
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container mx-auto">
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
        <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
        <p className="text-lg color-palette-1 m-0">
          Masuk untuk melakukan proses top up
        </p>
        <div className="pt-50">
        <TextInput
          label="Email Adress"
          name="email"
          type="email"
          placeHolder="Enter your email address"
          handleChange={handleChange}
          required
        />
        </div>
        <div className="pt-30">
        <TextInput
          label="Password"
          name="password"
          type="password"
          placeHolder="Your password"
          handleChange={handleChange}
          required
        />
        </div>
        
        <div className="button-group d-flex flex-column mx-auto pt-50">
          <button
            className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
            role="button"
            type='submit'
          >
            Continue to Sign In
          </button>
          <Link
            className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
            href="/signup"
            role="button"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </form>
  );
}
