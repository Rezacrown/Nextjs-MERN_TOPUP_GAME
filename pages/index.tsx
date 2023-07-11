import React from "react";

// import Link from 'next/link'
import MainBanner from "@/components/complex/Main-Banner";
import Navbar from "@/components/complex/Navbar";
import Reached from "@/components/complex/Reached";
import Story from "@/components/complex/Story";
import Footer from "@/components/complex/Footer";
import Feature from "@/components/complex/Feature";
import FeatureGame from "@/components/complex/Feature-game";

export default function index() {
  return (
    <>
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
