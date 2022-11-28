import React from "react";
import {
  BlackOutlineBtn,
  ManbalarWrapper,
  ManbalarWrapperFirst,
} from "../../styles";

export default function Manbalar(props) {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="d-flex col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 soya textCenter">
          <ManbalarWrapperFirst>
            <h1 className="defaultH1">Mustaqil o'rganish uchun manbalar</h1>
          </ManbalarWrapperFirst>
        </div>
        <div className="d-flex col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 soya textCenter">
          <ManbalarWrapper>
            <img src={props.firstImg} alt="" />
            <h1 className="defaultH1 my-4">{props.firstTitle}</h1>
            <p className="defaultP">{props.firstDescription}</p>
            <BlackOutlineBtn className="blackBtnPosition">
              Platformaga o'tish
            </BlackOutlineBtn>
          </ManbalarWrapper>
        </div>
        <div className="d-flex col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 soya  paddingInline textCenter">
          <ManbalarWrapper className="ps-5">
            <img src={props.secondImg} alt="" />
            <h1 className="defaultH1 my-4">{props.secondTitle}</h1>
            <p className="defaultP">{props.secondDescription}</p>
            <BlackOutlineBtn className="blackBtnPosition">
              Platformaga o'tish
            </BlackOutlineBtn>
          </ManbalarWrapper>
        </div>
        <div className="d-flex col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 soya textCenter">
          <ManbalarWrapper>
            <img src={props.thirdImg} alt="" />
            <h1 className="defaultH1 my-4">{props.thirdTitle}</h1>
            <p className="defaultP">{props.thirdDescription}</p>
            <BlackOutlineBtn className="blackBtnPosition">
              Platformaga o'tish
            </BlackOutlineBtn>
          </ManbalarWrapper>
        </div>
      </div>
    </div>
  );
}
