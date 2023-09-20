"use client";
import { useEffect,useState } from 'react';
import * as React from "react";
import Home from "./components/Home/home"
import AOS from "aos";
import "aos/dist/aos.css";
import cookies from 'js-cookie';

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
    <div>
      <Home authtoken={token}/>
    </div>
  );
}

export function getServerSideProps({ req, res }) {
  return { props: { token: req.cookies.JWT || "" } };
}
