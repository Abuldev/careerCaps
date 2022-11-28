import React from "react";
import { AboutPageWrapper } from "../../styles";
import bg from "../../assets/images/backgroundAbout.svg";
import position from "../../assets/images/positionPic.svg";
import networks from "../../assets/images/networks.svg";
import Footer from "../../components/Footer";
import telegram from "../../assets/images/Telegram.svg";
import gmail from "../../assets/images/gmail.svg";
export default function About() {
  return (
    <>
      <div
        className="minHeightAbout bg-dark"
        style={{
          background: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <AboutPageWrapper>
          <h1 className="aboutH1">Loyiha haqida </h1>
          <div className="maxWidthPAbuot">
            <p>
                Sayt -  foydalanuvchiga zamonaviy, talab yuqori bo'lgan kasblarning katalogini taqdim etadi. Har bir kasb haqida batafsil va faktlarga asoslangan ma'lumotlar berilgan. Foydalanuvchi saytdan o'zi istagan kasb haqida ma'lumot olishi, test sinovlarini ishlab ko'rishi va statistika bilan tanishishi mumkin
            </p>
          </div>
        </AboutPageWrapper>
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
          <img
            src={position}
            className="positionImage position-absolute end-0 img-fluid "
            alt=""
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
