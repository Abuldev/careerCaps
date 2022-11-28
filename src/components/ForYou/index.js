import React from "react";
import { ForYouWrapper } from "../../styles";
import { TestOutlineBtn } from "../TestOutlineBtn";

export default function ForYou(props) {
  return (
    <div className="row bg-white ">
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 position-relative minHeightLayerForYou">
        <div
          className="w-100 h-100 d-flex justify-content-center align-items-center imgLayerBackground text-center img-fluid position-relative"
          style={{
            background: `url(${props.backgroundImage})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
            <div className="imgLayerForYou">
                <h1 className="defaultH1 mx-4  text-white">{props.title}</h1>
            </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 bg-white col-12 minHeightLayerForYou">
        <ForYouWrapper>
          <h1 className="defaultH1 mt-4 ">{props.subtitle}</h1>
          <div className="d-flex justify-content-between flex-column align-items-start heightAuto">
            <p className="defaultP mt-5">{props.description}</p>
            <TestOutlineBtn className="outBtn" />
          </div>
        </ForYouWrapper>
      </div>
    </div>
  );
}
