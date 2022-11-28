import React from "react";
import {useState} from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, NavLink, Outlet, useNavigate, useParams} from "react-router-dom";
import AddQuestionModal from "../../components/AddQuestionModal";
import {accessToken, loadJobs} from "../../redux/actions";
import {instance} from "../../redux/actions";
import "./admin.css";
import {Button, Input, Modal} from "antd";
import {DeleteButton} from "../../styles";
import {DeleteOutlined} from "@ant-design/icons";
import {useAlert} from "react-alert";

export default function Admin() {
    const [modal, setModal] = useState(false);
    // const []
    const [pictureId, setPictureId] = useState("");
    let {id} = useParams();
    const [name, setName] = useState("")
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch();
    const jobs = useSelector((state) => state.jobsData?.quizzes);
    const alert = useAlert()
    useEffect(() => {
        dispatch(loadJobs());
    }, []);

    const jobSaqlash = (e) => {
        instance.post("api/v1/quiz", {
            name: `${name}`
        }).then((res) => {
            dispatch(loadJobs());
            setShowModal(false)
        })
    }

    document.onkeypress = function (e) {
        e = e || window.event;
        if (e.shiftKey && e.keyCode === 81) {
            setShowModal(true)
        }
    };

    function deleteJob(id) {
        if (window.confirm("Are you sure to delete?")){
            instance.delete("api/v1/quiz/delete/"+id).then(function (res){
               if (res.data.success){
                   alert.info("Kasb o'chirildi")
                   dispatch(loadJobs());
               } else {
                   alert.info(res.data.message)
               }
            })
        }
    }

    return (
        <div>
            <div className=" w-100">
                <div className="container px-2 py-1 ">

                    <div className="row mt-3">
                        <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-12 menu ">
                            <ul className="list-group mb-4 py-4 listItem h-100">
                                {jobs.map((e, i) => (
                                    <li className="text-white li mb-2 position-relative" key={i}>
                                        <DeleteButton
                                            onClick={()=>deleteJob(e.id)}
                                            style={{
                                                top: "25%",
                                                right: "8px",
                                                width: "20px",
                                                height: "20px",
                                                border: 0,
                                                background: "transparent"
                                            }}
                                        >

                                        </DeleteButton>
                                        <NavLink
                                            style={({isActive}) => ({
                                                background: isActive ? "white" : "",
                                            })}
                                            to={`${e.id}`}
                                            className={"rounded a py-1 px-3"}
                                        >

                                            {e.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-xl-10 col-lg-10 col-md-9 col-sm-6 col-12 px-4">
                            <div className="text-end">
                                <Link to={"/details/" + id}>
                                    <button
                                        className="btn btn-primary mb-3"
                                        style={{marginRight: "5px"}}
                                    >
                                        Details
                                    </button>
                                </Link>
                                <button
                                    className="btn btn-primary mb-3"
                                    onClick={() => setModal(true)}
                                >
                                    Add question
                                </button>
                                {<AddQuestionModal show={modal} handleClose={setModal}/>}
                            </div>
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </div>

            <>
                <Modal title="Kasbni saqlaymizmi?" visible={showModal} onOk={jobSaqlash}
                       onCancel={() => setShowModal(false)}>
                    <label htmlFor="nmaeOfJob">Kasb nomini kiriting</label>
                    <Input
                        id={"nmaeOfJob"}
                        onChange={(e) => setName(e.target.value)} placeholder="masalan -> Dasturchi" required/>
                </Modal>
            </>
        </div>
    );
}
