import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getQuestion, instance, loadQuestions } from "../../../redux/actions";
import { id } from "../../../redux/actions";
import { ImgWrapper } from "../../../styles";
import { faEdit, faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Collapse, Input, Modal } from "antd";
import 'antd/dist/antd.css';
import { useAlert } from 'react-alert'
import { DeleteFilled, EditFilled, EditOutlined, LoadingOutlined } from "@ant-design/icons";
import { Spin } from 'antd';

import EditModalQuestion from "../../../components/EditQuestionModal";
import { BASE_URL } from "../../../utils/constans";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import axios from "axios";

export default function RoutesComponent() {
    const { id } = useParams();
    const { Panel } = Collapse;
    const [isEdit, setIsEdit] = useState({})
    const [pictureId, setPictureId] = useState("");
    const [image, setImage] = useState("");
    const [modal, setModal] = useState(false)
    const [imgLoading, setImgLoading] = useState(false)
    const [questionLoading, setQuestionLoading] = useState(false)
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)
    const questions = useSelector((state) => state.questionsData?.questions);
    const alert = useAlert()


    // antd
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

    const loadQuestions = () => {
        setQuestionLoading(true)
        return function (dispatch) {
            instance
                .get(`api/v1/question/${id}`)
                .then((res) => {
                    setQuestionLoading(false)
                    console.log(res.data.data);
                    dispatch(getQuestion(res?.data.data));
                })
                .catch((err) => {
                    setQuestionLoading(false)
                    console.log(err);
                });
        };
    };
    // const getAttachments = () => {
    //   instance
    //     .get(`api/v1/file/get/${pictureId}`)
    //     .then((res) => {
    //       setImage(res.data);
    //     })
    //     .catch((err) => console.log(err));
    // };


    // const handleFile = (e) => {
    //         const attachment = {}
    //
    //         const formData = new FormData();
    //         formData.append("files", e);
    //         setImgLoading(true)
    //         instance
    //             .post("api/v1/file/saveAttachments", formData)
    //             .then((res) => {
    //                 instance.put("api/v1/quiz/" + id + "?attachmentId=" + res?.data.data).then(r => {
    //                     dispatch(loadQuestions())
    //                     alert.success("Rasm saqlandi")
    //                     setImgLoading(false)
    //
    //                 })
    //                 attachment.smth = {...res.data.data[0]}
    //
    //             })
    //             .catch((err) => {
    //                 console.log(err);
    //             });
    // };

    const deleteQuestions = (event, id) => {
        instance.delete(`api/v1/question/delete/${id}`).then((res) => {
            console.log(res.data);
            if (res.data.success) {
                alert("question deleted")
            } else {
                alert.show(res.data.message)
            }
            dispatch(loadQuestions(id))

        })
    }
    useEffect(() => {
        dispatch(loadQuestions());
    }, [id]);
    const putQuestions = (e) => {
        setIsEdit(e)
        return setModal(true)
    }

    function openModal(bool) {
        setModal(bool)
        setLoading(!loading)

    }

    const extraAll = () => {
        <DeleteFilled />
    }
    return (<Spin spinning={questionLoading}>
        <div className="row align-items-start">
            {/*<div*/}
            {/*    className="col-xl-2 col-lg-2 col-md-12 col-sm-12  col-12 d-flex justify-content-center flex-column align-items-center">*/}

            {/*    /!*<label htmlFor="fileee">*!/*/}
            {/*    /!*    <input*!/*/}
            {/*    /!*        type="file"*!/*/}
            {/*    /!*        hidden*!/*/}
            {/*    /!*        id={"fileee"}*!/*/}
            {/*    /!*        onChange={(e) => handleFile(e.target.files[0])}*!/*/}
            {/*    /!*        accept="image/*"*!/*/}
            {/*    /!*    />*!/*/}
            {/*    /!*    <ImgWrapper>*!/*/}
            {/*    /!*        {imgLoading ? <Spin indicator={antIcon}/> : // <img width={100}*!/*/}
            {/*    /!*            //      src={BASE_URL + `api/v1/file/get/${questions?.attachment}`}*!/*/}
            {/*    /!*            //      alt=""*!/*/}
            {/*    /!*            // />*!/*/}

            {/*    /!*            <LazyLoadImage*!/*/}
            {/*    /!*                alt={"an error expected loading image"}*!/*/}
            {/*    /!*                src={BASE_URL + `api/v1/file/get/${questions?.attachment}`} // use normal <img> attributes as props*!/*/}
            {/*    /!*                effect="blur"*!/*/}
            {/*    /!*                className={"img-fluid"}*!/*/}
            {/*    /!*            />*!/*/}

            {/*    /!*        }*!/*/}
            {/*    /!*    </ImgWrapper>*!/*/}
            {/*    /!*</label>*!/*/}
            {/*    /!*<h5 className="mt-2">{questions?.name}</h5>*!/*/}

            {/*</div>*/}
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                {questions.questions?.map((e, i) => {
                    return (
                        <div key={i}>

                            <div className="d-flex justify-content-end">
                                <button className="text-danger btn p-1" onClick={() => putQuestions(e)}>
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                                <button className="text-danger btn p-1"
                                    onClick={(event) => deleteQuestions(event, e.id)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                                {modal ? <EditModalQuestion isEdit={isEdit}
                                    show={modal} handleClose={openModal} /> : ''}

                            </div>
                            <Collapse className="mb-2" defaultActiveKey={["1"]}>
                                <Panel header={e.title} key={i} style={{ "fontSize": "20px", "color": "#111" }}>

                                    {e.answers.map((answer, index) => {
                                        return (

                                            <>
                                                <p key={index} className="">
                                                    <input
                                                        className="input-form-check me-3"
                                                        type="radio"
                                                        checked={answer.isTrue}
                                                    />
                                                    {answer.answer}
                                                </p>

                                            </>
                                        )
                                    })}
                                </Panel>
                            </Collapse>
                        </div>
                    )
                })}
            </div>
        </div>

    </Spin>);
}