import React from "react";
import statistic from "../../assets/images/statistika.svg";
import CardMini from "../../components/CardMini";
import jami from "../../assets/images/statistika/jami.svg";
import boy from "../../assets/images/statistika/boy.svg";
import girl from "../../assets/images/statistika/girl.svg";
import CardWrapper from "../../components/CardWrapper";
import ProgressCard from "../../components/ProgressCard";
import jamii from "../../assets/images/statistika/jamii.svg";
import erkaklar from "../../assets/images/statistika/erkaklar.svg";
import ayollar from "../../assets/images/statistika/ayollar.svg";
import thirty from "../../assets/images/statistika/thirty.svg";
import seventy from "../../assets/images/statistika/seventy.svg";
import Footer from "../../components/Footer";
import { images } from "../../assets/images";
import { useState } from "react";
import { instance } from "../../redux/actions";
import { useEffect } from "react";
import { Spin } from "antd";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function Statistics() {
  const [statistics, setStatistics] = useState({})
  const [loader, setLoader] = useState(false)
  const { One, Two, Three } = images
  const getStatistics = () => {
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 1000)
    instance.get("api/v1/statistics").then((res) => {
      console.log(res.data.data);
      setStatistics({ ...res.data.data })
      let rows = res.data.data.topQuizes[0].image = One
      rows = res.data.data.topQuizes[1].image = Two
      rows = res.data.data.topQuizes[2].image = Three
    }).catch((err) => {
      console.log(err);
    })
  }
  useEffect(() => {
    getStatistics()
  }, [])
  return (
    <Spin spinning={loader} delay={100}>
      <div className="DefaultBg minHeight">
        <div className="container py-5 px-5 text-white">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 col-md-6  col-xl-g col-sm-12 col-12 mainHome">
              <h1 className="title">CareerCaps</h1>
              <p className="subtitle">Kelajak kasbingizni biz bilan tanlang</p>
            </div>
            <div className="col-lg-6 col-md-6 d-flex justify-content-center align-items-center flex-column col-xl-g col-sm-12   col-12">
              <LazyLoadImage effect={"blur"} className="img-fluid mt-4" src={statistic} alt="" />
            </div>
          </div>
        </div>
      </div>
      <section className="py-5">
        <div className="container px-5">
          <h1 className="colorH1">Testda qatnashganlar soni</h1>
          <div className="row mt-4">
            <CardMini kim={"Jami"} img={jami} soni={statistics.allMembers} />
            <CardMini kim={"Erkaklar soni"} img={boy} soni={statistics.males} />
            <CardMini kim={"Ayollar soni"} img={girl} soni={statistics.females} />
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container px-5">
          <h1 className="colorH1">Eng ko'p ishlangan testlar</h1>
          <div className="row mt-4">
            {statistics?.topQuizes?.map((e, i) => <CardWrapper img={e.attachment} jobName={e.name} crown={e.image} />)}

          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container px-5">
          <h1 className="colorH1">Testlar statistikasi</h1>
          <div className="row mt-4">
            <ProgressCard
                img={jamii}
                title={"Jami"}
                color={{
                  // "direction": "89.92deg",
                  "0.07%": "#3000D6",
                  "99.93%": "#3DD0F0"
                }}
                soni={statistics.allTests}
                percent={statistics.allTests / (statistics.allTests / 100)}
            />
            <ProgressCard
                color={"#3DD0F0"}
              img={erkaklar}
              title={"Muvaffaqiyatli"}
              percent={statistics.successTests / (statistics.allTests / 100)}
              soni={statistics.successTests}
            />
            <ProgressCard
                color={{
                  // "direction": "89.92deg",
                  "0.07%": "#3000D6",
                  "99.93%": "#3DD0F0"
                }}
              img={ayollar}
              title={"Muvaffaqiyatsiz"}
              percent={statistics.failedCount / (statistics.allTests / 100)}
              soni={statistics.failedCount}
            />
          </div>
        </div>
      </section>
      <Footer />
    </Spin>
  );
}
