import React from "react";
import { AdvantagesCardWrapper } from "../../styles";

export default function AdvantagesCard(props) {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mt-3   ">
      <AdvantagesCardWrapper>
        <div className="pt-5 px-4">
          <h2>{props.title}</h2>
          <img
              style={{
                  height:"120px",
                  width:"120px",
                  objectFit:"contain"
              }}
              className="my-2" src={props.img} alt="" />
          <p className="defaultP mt-3">{props.description}</p>
        </div>
      </AdvantagesCardWrapper>
    </div>
  );
}
