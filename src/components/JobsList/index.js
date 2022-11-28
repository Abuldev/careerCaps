import React from "react";

export default function JobsList(props) {
  return (
    <div className="col-12 jobsListCard  py-5 mb-4">
      <div className="d-flex jobsListWrap">
        <div className=" justify-content-center d-flex mx-5 w-25">
          <div className="position-relative">
            <img className="jobsListImg" src={props.img} alt="" />
            <img
              className="position-absolute positionImg"
              src={props.check}
              alt=""
            />
          </div>
        </div>
        <div className="w-75">
          <h3 className="JobsListTitle">{props.title}</h3>
          <p className="JobsListdescription">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
