import React from "react";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function CardMaker(props) {
    return (
        <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12 cardmaker pt-5 pe-5 pb-4">
            {/*<img className="mb-3 img-fluid minHeightImg" src={props.img} alt="" />*/}
            <LazyLoadImage className="mb-3 img-fluid minHeightImg"
                           src={props.img}
                           style={{
                               height:"90px",
                               width:"108px",
                               objectFit:"contain"
                           }}
                           effect={"blur"}/>
            <h2>{props.title}</h2>
            <p className="maxwidthP">{props.description}</p>
        </div>
    );
}
