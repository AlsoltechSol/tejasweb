//import liraries
import React, { Component } from "react";
import "./ourBrands.css";
import Image from "next/image";
import logo1 from "../../assets/icons/Logo1.png";
import logo2 from "../../assets/icons/Logo2.png";
import logo3 from "../../assets/icons/Logo3.png";
// create a component
const Ourbrands = () => {
  return (
    <div className="CertifiedSec">
      <p className="CertifiedText">Our Brands</p>
      <div className="SertificateImgSec">
        <Image src={logo1} className="w-20 h-20 object-contain" alt="logo" />
        <Image
          src={logo2}
          className="w-40 h-35 object-contain bg-[#c2bebe]"
          alt="logo"
        />
        <Image src={logo3} className="w-40 h-40 object-contain" alt="logo" />
      </div>
    </div>
  );
};

//make this component available to the app
export default Ourbrands;
