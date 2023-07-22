import React from "react";

// import Link from 'next/link'
import MainBanner from "@/components/complex/Main-Banner";
import Navbar from "@/components/complex/Navbar";
import Reached from "@/components/complex/Reached";
import Story from "@/components/complex/Story";
import Footer from "@/components/complex/Footer";
import Feature from "@/components/complex/Feature";
import FeatureGame from "@/components/complex/Feature-game";
import Head from 'next/head'

export default function index() {
  return (
    <>
      <Head>
        <title>Store GG</title>
        <meta
          name="description"
          content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati"
        />
        <meta
          property="og:title"
          content="StoreGG - Get a New Experience in Gaming"
        />
        <meta
          property="og:description"
          content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati"
        />
        <meta property="og:image" content="https://imageurlkalian" />
        <meta property="og:url" content="https://storegg.com" />
      </Head>
      <Navbar />
      <MainBanner />
      <Feature />
      <FeatureGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}
