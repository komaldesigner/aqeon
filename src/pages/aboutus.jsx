import React from "react";
import Banner from "../comman/Banner/Banner.jsx";
import Aboutustxt from "../components/Aboutus/aboutustxt.jsx";
import Aboutusbannerimg from "../components/Aboutus/aboutusbnnrimgtxt.jsx";

const Aboutus = () => {
    return(
    <>
      <Banner       
      index={'aboutus'}
      startText={''}
      centerText={''}
      endText={''}
      isvalue={false}
      isanothervalue={false}
      

      />
      <Aboutustxt />
      <Aboutusbannerimg />

    </>

    )
  };
  
  export default Aboutus;