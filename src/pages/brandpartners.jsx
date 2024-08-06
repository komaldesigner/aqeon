import React from "react";
import Banner from "../comman/Banner/Banner.jsx";
import BrandTagline from "../components/Brandpartner/brandtagline.jsx";
import Brandpartlogo from "../components/Brandpartner/brandpartnerlogo.jsx";

const Brandpartners = () => {
    return(
    <>
      <Banner       
      index={'brandpartners'}
      startText={''}
      centerText={''}
      endText={''}
      isvalue={false}
      isanothervalue={false}
      

      />
      <BrandTagline />
      <Brandpartlogo />

    </>

    )
  };
  
  export default Brandpartners;