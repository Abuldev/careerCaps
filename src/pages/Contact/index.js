import React from "react";
import about from "../../assets/images/contact/about.svg";
import networks from "../../assets/images/contact/networks.svg";
import Footer from "../../components/Footer";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import telegram from "../../assets/images/Telegram.svg";
import gmail from "../../assets/images/gmail.svg";
export default function Contact() {
  return (
    <>
      <div className="DefaultBg minHeight">
        <div className="container py-5 px-5 text-white">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-md-6  col-xl-g col-sm-12 col-12 mainHome">
              <h1 className="title">CareerCaps</h1>
              <p className="subtitle">Kelajak kasbingizni biz bilan tanlang</p>
            </div>
            <div className="col-lg-6 col-md-6 col-xl-g col-sm-12   col-12">
              <LazyLoadImage className="img-fluid mt-4" src={about} alt="" effect={"blur"}/>
            </div>
          </div>
        </div>
      </div>
      <section className="networksSection">
        <div className="container px-5 py-5 d-flex justify-content-center align-items-center flex-column text-center">
          <div>
            <a href="https://t.me/Career_Caps" target={"_blank"}>
              <img className={"mx-2"} src={telegram} alt="networks"/>
            </a>
            <a
                target={"_blank"}
                href="https://mail.google.com/mail/?view=cm&fs=1&to=careercapscom@gmail.com&su=Assalomu alaykum">
              <img className={"mx-2"} src={gmail} alt="networks"/>
            </a>
            <h1 className="defaultH1 mt-4 mb-3">Admin bilan aloqa</h1>
            {/*<p className="fw-400">(+998 90) 977-19-60</p>*/}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
