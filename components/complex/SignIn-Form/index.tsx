import TextInput from "@/components/atoms/TextInput";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SignIn_Form() {
  return (
    <form action="">
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
        />
        </div>
        <div className="pt-30">
        <TextInput
          label="Password"
          name="password"
          type="password"
          placeHolder="Your password"
        />
        </div>
        
        <div className="button-group d-flex flex-column mx-auto pt-50">
          <Link
            className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
            href="/"
            role="button"
          >
            Continue to Sign In
          </Link>
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
