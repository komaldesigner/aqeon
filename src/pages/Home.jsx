import React from "react";
import Banner from "../comman/Banner/Banner.jsx";
import About from "../components/Home/Aboutus.jsx";
import Product from "../components/Home/Product.jsx";
import Drop from "../components/Home/Dropsection.jsx";
import Tesimonial from "../components/Home/Testimonial.jsx";
import Brands from "../components/Home/brands.jsx";


const Home = () => {
  return (
    <>
      <Banner
        index={'home'}
        startText={'Experience superior water quality with'}
        centerText={'Aqeon Enterprises.'}
        endText={'Our advanced water softening systems are perfect for your home, business, or industrial needs.'}
        isvalue={true}
        isanothervalue={true}
      />
      <About />
      <Product />
      <Brands />
      <Drop />
      <Tesimonial />
    </>

  )
};

export default Home;