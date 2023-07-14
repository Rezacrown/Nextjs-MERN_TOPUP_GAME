import react, { useEffect } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import AOS from "aos";
import {ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";


// css custom
import "../styles/css/homepage.css";
import "../styles/css/utillities.css";
import "../styles/css/detail.css";
import "../styles/css/checkout.css";
import "../styles/css/complete-checkout.css";
import "../styles/css/sign-in.css";
import "../styles/css/sign-up.css";
import "../styles/css/sign-up-photo.css";
import "../styles/css/sign-up-success.css";
import "../styles/css/404-not-found.css";
import "../styles/css/sidebar.css";
import "../styles/css/overview.css";
import "../styles/css/transactions.css";
import "../styles/css/transactions-detail.css";
import "../styles/css/edit-profile.css";


// redux settings
import store from '@/redux/store'
import {Provider} from 'react-redux'


export default function myApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        {/* <!-- Bootstrap CSS --> */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
          crossOrigin="anonymous"
        />
        {/* goggle font */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        {/* <!-- AOS Animation --> */}
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />

        {/* Call Bootstrap Script --> */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Provider store={store}>
      <Component {...pageProps} />
      <ToastContainer position="top-right" />
      </Provider>
    </>
  );
}
