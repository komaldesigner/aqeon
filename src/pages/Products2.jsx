import React from "react";
import Banner from "../comman/Banner/Banner.jsx";
import Aqeonotherprdo from "../components/Products/otherproducts.jsx";


const otherproducat = () => {
    return(
    <>
      <Banner       
      index={'products2'}
      startText={''}
      centerText={''}
      endText={''}
      isanothervalue={false}
      />
      
      <Aqeonotherprdo />

    </>

    )
  };
  
  export default otherproducat;