import React from "react";
export default function JobLayer(props) {
  return (
    <div className="row align-items-center  DefaultBg minHeightLayer ">
      <div className="container px-5">
        <div className="row p-5">
          <div className="col-lg-6 col-md-6  col-xl-g col-sm-12 col-12 d-flex align-items-center">
            <h1 className="title layerH1 px-4 text-white">{props.title}</h1>
          </div>
          <div className="col-lg-6 col-md-6 col-xl-g col-sm-12 layerRelative col-12">
            <img className="img-fluid layerAbsolute" src={props.layer} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
