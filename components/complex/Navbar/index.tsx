import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


export default function Navbar() {
  return (
    <section>
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
            <div className="container-fluid">
                <Link className="navbar-brand" href="#">
                      <Image src='/assets/icon/icon-navbar.svg' width={60} height={60} alt='123' />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
                        <li className="nav-item my-auto">
                            <Link className="nav-link active" aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item my-auto">
                            <Link className="nav-link" href="#">Games</Link>
                        </li>
                        <li className="nav-item my-auto">
                            <Link className="nav-link" href="#">Rewards</Link>
                        </li>

                        <li className="nav-item my-auto">
                            <Link className="nav-link" href="#">Discover</Link>
                        </li>
                        <li className="nav-item my-auto me-lg-20">
                            <Link className="nav-link" href="#">Global Rank</Link>
                        </li>
                        <li className="nav-item my-auto">
                            <Link className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
                                href="/signin" role="button">Sign
                                In</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </section>
  )
}
