import React from "react";
import { CardMiniWrapper } from "../../styles";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function CardMini(props) {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 mt-2">
      <CardMiniWrapper>
        <div>
          <LazyLoadImage effect={"blur"} src={props.img} alt="" />
        </div>
        <div className="align-self-end">
          <p className="mediumP m-0">{props.kim}</p>
          <h3>{props.soni} ta</h3>
        </div>
      </CardMiniWrapper>
    </div>
  );
}
