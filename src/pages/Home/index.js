import React, {useEffect, useState} from "react";
import {OutlineBtn} from "../../styles";
import MainImg from "../../assets/images/m.svg";
import CardMaker from "../../components/CardMaker";
import first from "../../assets/images/1.svg";
import second from "../../assets/images/2.svg";
import third from "../../assets/images/3.svg";
import fourth from "../../assets/images/4.svg";
import networks from "../../assets/images/networks.svg";
import telegram from "../../assets/images/Telegram.svg";
import gmail from "../../assets/images/gmail.svg";
import position from "../../assets/images/positionPic.svg";
import Footer from "../../components/Footer";
import {instance} from "../../redux/actions";
import {useNavigate} from "react-router-dom";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {publicIpv4} from 'public-ip';

export default function Home() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        job: 10,
        distinctGuestUsers: 70,
        info: 90,
        tests: 12
    })

    useEffect(() => {
        instance.get("api/v1/statistics/home").then(function (res) {
            setData({tests: res.data.data.tests,job: res.data.data.job, distinctGuestUsers: res.data.data.distinctGuestUsers, info: res.data.data.job * 8})
        })
        increaseViewCount()
    }, [])


    async function increaseViewCount() {
        await instance.post("/api/v1/statistics/increase?ip=" + await publicIpv4())
    }

    return (
        <>
            <div className="DefaultBg minHeight">
                <div className="container py-5 px-5 text-white">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-6 col-md-6  col-xl-g col-sm-12 col-12 mainHome">
                            <h1 className="title">CareerCaps</h1>
                            <p className="subtitle">Kelajak kasbingizni biz bilan tanlang</p>
                            <OutlineBtn className="mt-4 outBtn" onClick={() => navigate("/quiz")}>Test</OutlineBtn>
                        </div>
                        <div
                            className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center flex-column col-xl-g col-sm-12   col-12"
                            style={{height:"408px"}}
                        >
                            <LazyLoadImage style={{maxHeight:"408px"}} className="img-fluid mt-4" src={MainImg} effect={"blur"}/>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className="w-100" id="linkTo">
                    <div className="row">
                        <CardMaker
                            img={first}
                            title={data?.job + "+ Kasblar"}
                            description={
                                "Yaqin yillar ichida ommalashgan  va kelajakda talab yuqori bo'lishi kutilayotgan kasblar jamlanmasi"
                            }
                        />
                        <CardMaker
                            img={second}
                            title={data?.info + "+ ma'lumotlar"}
                            description={
                                "Har bir kasb haqida batafsil va faktlarga asoslangan ma'lumotlar"
                            }
                        />
                        <CardMaker
                            img={third}
                            title={data?.distinctGuestUsers + "+ foydalanuvchilar "}
                            description={
                                "CareerCaps saytiga tashrif buyurgan foydalanuvchilar soni"
                            }
                        />
                        <CardMaker
                            img={fourth}
                            title={data?.tests + "+ test sinovlari"}
                            description={
                                "Har bir kasb uchun 5-7 savoldan iborat test sinovlari"
                            }
                        />
                    </div>
                </div>
            </section>
            <section className="d-flex justify-content-center align-items-center flex-column careerCapsBg">
                <div className="container text-white text-center px-5">
                    <h1 className="defaultH1 text-white ">CareerCaps</h1>
                    <p className="mt-3">
                        Sayt -  foydalanuvchiga zamonaviy, talab yuqori bo'lgan kasblarning katalogini taqdim etadi. Har bir kasb haqida batafsil va faktlarga asoslangan ma'lumotlar berilgan. Foydalanuvchi saytdan o'zi istagan kasb haqida ma'lumot olishi, test sinovlarini ishlab ko'rishi va statistika bilan tanishishi mumkin
                    </p>
                    <OutlineBtn className="mt-4 outBtn" onClick={() => navigate("jobsCatalog")}>Kasblar
                        Katalogi</OutlineBtn>
                </div>
            </section>
            <section className="networksSection">
                <div
                    className="container px-5 py-5 d-flex justify-content-center align-items-center flex-column text-center">
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
            <Footer/>
        </>
    );
}
