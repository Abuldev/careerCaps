import {
    faInstagram,
    faLinkedin,
    faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {JobsContactWrapper} from "../../styles";
import {BASE_URL} from "../../utils/constans";

export default function JobsContact(props) {
    return (
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12 soya py-5">
            <JobsContactWrapper>
                <div className="circleImage">
                    <img className={"job_img__3"} src={props.img} alt=""/>
                </div>
                <h4 className="mt-3 mx-3 nameH3">{props.name}</h4>
                <div className="px-4">
                    <p className="titleH3">{props.title}</p>
                    <div className="d-flex justify-content-center gap-3">
                        <div className="circleIcon">
                            <a href={props.telegram} target={"_blank"} className={"text-white"}>
                                <img src={BASE_URL + "api/v1/file/get/" + props.telegramAttachment}
                                     style={{
                                         width: "40px",
                                         height: "40px",
                                         stroke: "white",
                                         borderRadius: "50%",
                                         background: "white",
                                     }}
                                     alt=""/>
                            </a>
                        </div>
                        <div className="circleIcon">
                            <a href={props.linkedIn} target={"_blank"} className={"text-white"}>
                                <img src={BASE_URL + "api/v1/file/get/" + props.linkedInAttachment}
                                     style={{
                                         width: "40px",
                                         height: "40px",
                                         stroke: "white",
                                         borderRadius: "50%",
                                         background: "white",
                                     }}
                                     alt=""/>
                            </a>
                        </div>
                        <div className="circleIcon">
                            <a href={props.instagram} target={"_blank"} className={"text-white"}>
                                <img src={BASE_URL + "api/v1/file/get/" + props.instagramAttachment}
                                     style={{
                                         width: "40px",
                                         height: "40px",
                                         stroke: "white",
                                         borderRadius: "50%",
                                         background: "white",
                                     }}
                                     alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </JobsContactWrapper>
        </div>
    );
}
