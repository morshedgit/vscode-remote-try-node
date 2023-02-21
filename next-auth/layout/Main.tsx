import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";

// import Navbar from './navbar'
// import Footer from './footer'

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
