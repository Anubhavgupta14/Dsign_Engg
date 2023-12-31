"use client";
import { useEffect,useState } from 'react';
import * as React from "react";
import Home from "../components/Home/home"
import AOS from "aos";
import "aos/dist/aos.css";
import Head from 'next/head'

export default function BasicTextFields({token}) {
  let loaderbool;

  useEffect(() => {
    AOS.init({});
    loaderbool = localStorage.getItem("loader");
    // alert(loaderbool)
    localStorage.setItem("loader","false")
    // console.log(loaderbool);

  }, [])

  return (
    <>
    <Head>
        <title>The Design Engg</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fav.png" />
      </Head>
    <div>
      <Home authtoken={token}/>
    </div>
    </>
  );
}

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.JWT || "" } };
}
