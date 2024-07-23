import React from "react";
import Banner from "../comman/Banner/Banner.jsx";
import Getintouch from "../components/Contact/Getintouch.jsx";
import ContactForm from "../components/Contact/ContactForm.jsx";

const Contact = () => {
    return(
    <>
      <Banner       
      index={'contact'}
      startText={'Contact'}
      centerText={'Aqeon Enterprises'}
      endText={' For expert assistance in choosing the perfect water softening solution. Whether by phone, email, or in person, our dedicated team is ready to help. Your satisfaction is our priority.'}
      isvalue={true}
      isanothervalue={true}
      

      />
      <Getintouch />
      <ContactForm />

    </>

    )
  };
  
  export default Contact;