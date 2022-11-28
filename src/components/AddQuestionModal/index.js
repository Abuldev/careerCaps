import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { instance, postQuestion } from "../../redux/actions";
import { getQuestion } from "../../redux/actions";
export default function AddQuestionModal(props) {
  const { id } = useParams();
  const [questionTitle, setQuestionTitle] = useState("");
  const [questions, setQuestions] = useState([]);
  const dispatch = useDispatch()
  const modalStyle = {
    display: "block",
    backgroundColor: "rgba(0,0,0,0.6)",
  };

  const addInput = () => {
    questions.push({
      answer: "",
      isTrue: false,
    });
    setQuestions([...questions]);
  };
  const addVariant = (e, index) => {
    questions[index].answer = e.target.value;
    setQuestions([...questions]);
  };

  const handleChange = (e, i) => {
    questions.map((item, index) => {
      if (index === i) {
        item.isTrue = true;
      } else {
        item.isTrue = false;
      }
    });
    setQuestions([...questions]);
    console.log(questions);
  };
  const loadQuestions = (id) => {
    return function (dispatch) {
      instance
        .get(`api/v1/question/${id}`)
        .then((res) => {
          console.log(res.data.data);
          dispatch(getQuestion(res?.data.data));
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };
  const submitQuestion = () => {
    if (questionTitle === "") {
      alert("question title kiritilmagan")
    } else {

      instance
        .post(`api/v1/question/add_question_with_answers/${id}`, {
          title: questionTitle,
          answers: questions,
        })
        .then((res) => {
          console.log(res.data);
          dispatch(postQuestion(res?.data))

        })
        .catch((err) => console.log(err));
      setQuestionTitle("");
      setQuestions([]);
      alert("question added successfully!!!")
      props.handleClose(false);
      dispatch(loadQuestions(id))
    }
  };


  return (
    <div>
      <Modal show={props.show} onHide={() => props.handleClose(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add question here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="text" className="form-label">
            Savol matnini kiriting
          </label>
          <div className="d-flex gap-2">
            <input
              id="text"
              autoComplete="off"
              onChange={(e) => setQuestionTitle(e.target.value)}
              type="text"
              placeholder="savol matni"
              className="form-control"
              required
            />
            <button className="btn btn-dark" onClick={addInput}>
              +
            </button>
          </div>
          <div>
            {questions.map((e, i) => (
              <div className="d-flex px-5 gap-2 mt-2" key={i}>
                <input
                  type={"text"}
                  onChange={(e) => addVariant(e, i)}
                  className="form-control mb-2"
                  placeholder="variant kiriting..."
                />
                <input
                  onChange={(e) => handleChange(e, i)}
                  name={"name"}
                  type="radio"
                />
              </div>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => props.handleClose(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={submitQuestion}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
