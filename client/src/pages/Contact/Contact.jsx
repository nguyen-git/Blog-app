import React from 'react';
import "./contact.scss";
import Header from '../../components/Header/Header';
import cottonbrobg from "../../../src/asset/img/cottonbrobg.jpg";
import Footer from "../../components/Footer/Footer.jsx";
import FormContact from '../../components/FormContact/FormContact';

const Contact = () => {
  return (
    <div className="contact">
        <Header />
        <div className="contactBanner">
            <img src={cottonbrobg} alt="" />
        </div>
        <FormContact />
        <Footer />
    </div>
  )
}

export default Contact