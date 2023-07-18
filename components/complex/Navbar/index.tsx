import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";
import { config } from "@/config";

import { checkLocalStorage, removeToken } from "@/services/Auth";
import { checkCookies } from "@/services/Auth";
import { UserPayload } from "@/interface/navbar";

export default function Navbar() {
    const router = useRouter()
  const [data, setData] = useState({
    name: "",
    avatar: "",
    username: "",
    email: "",
    _id: "",
  });

  useEffect(() => {
    const payload = checkCookies("authToken");
    if (payload) {
      setData({
        avatar: payload.avatar,
        name: payload.name,
        username: payload.username,
        _id: payload._id,
        email: payload.email,
      });
    }
  }, []);


  const handleLogout = () => {
      localStorage.clear()
      removeToken('authToken')
      router.push('/signin')
        
  }
    

  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            <Image
              src={"/assets/icon/icon-navbar.svg"}
              width={60}
              height={60}
              alt="123"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              <li className="nav-item my-auto">
                <Link className="nav-link active" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item my-auto">
                <Link className="nav-link" href="#">
                  Games
                </Link>
              </li>
              <li className="nav-item my-auto">
                <Link className="nav-link" href="#">
                  Rewards
                </Link>
              </li>

              <li className="nav-item my-auto">
                <Link className="nav-link" href="#">
                  Discover
                </Link>
              </li>
              <li className="nav-item my-auto me-lg-20">
                <Link className="nav-link" href="#">
                  Global Rank
                </Link>
              </li>
              <li className="nav-item my-auto">
                {data.avatar || data.username ? (
                  <li className="nav-item my-auto dropdown d-flex">
                    <div className="vertical-line d-lg-block d-none" />
                    <div>
                      <a
                        className="dropdown-toggle ms-lg-40"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <Image
                          src={`${config.URL}/${data?.avatar}`}
                          className="rounded-circle"
                          width="50"
                          height="50"
                          alt=""
                        />
                      </a>

                      <ul
                        className="dropdown-menu border-0"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li>
                          <Link href="/member" className="dropdown-item text-lg color-palette-2">
                              My Profile
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item text-lg color-palette-2"
                              href="/">
                            
                              Wallet
                            
                          </Link>
                        </li>
                        <li>
                          <Link href="/member/edit-profile" className="dropdown-item text-lg color-palette-2">                            
                              Account Settings
                          </Link>
                        </li>
                        <li onClick={handleLogout}>
                          <Link
                            href="/"
                            className="dropdown-item text-lg color-palette-2"
                          >
                            Log Out
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                ) : (
                  <Link
                    className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
                    href="/signin"
                    role="button"
                  >
                    Sign In
                  </Link>
                )}
              </li>
            </ul>
            {/* dropdown menu */}
            {/* <ul
              className="dropdown-menu border-0"
              aria-labelledby="dropdownMenuLink"
            >
              <li>
                <Link
                  href="/member"
                  className="dropdown-item text-lg color-palette-2"
                >
                  My Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="dropdown-item text-lg color-palette-2"
                >
                  Wallet
                </Link>
              </li>
              <li>
                <Link
                  href="/member/edit-profile"
                  className="dropdown-item text-lg color-palette-2"
                >
                  Account Settings
                </Link>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
    </section>
  );
}
