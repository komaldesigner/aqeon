import React from "react";
import Banner from "../comman/Banner/Banner.jsx";
import CatOneProduct from "../components/Products/3mproduct.jsx";


const Products = () => {
    return(
    <>
      <Banner       
      index={'products'}
      startText={'DISCOVER'}
      centerText={'SUPERIOR WATER QUALITY WITH'}
      endText={'AQEON ENTERPRISES'}
      isvalue={false}
      isanothervalue={true}
      />
      <CatOneProduct />
      

    </>

    )
  };
  
  export default Products;