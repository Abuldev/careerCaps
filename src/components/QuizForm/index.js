import React from "react";
import { useState } from "react";
import ayol from "../../assets/images/quiz/qizcha.svg";
import erkak from "../../assets/images/quiz/yigitcha.svg";
import { QuizformWrapper } from "../../styles";

export default function QuizForm(props) {
  // const [isChecked, setIsChecked] = useState(false)
  // const [title, setTitle] = useState(0)
  // const onMinus = (e) => {
  //   setTitle(e)
  //   if (title < 0) {
  //     setTitle("")
  //   }
  // }

  function handleKeypress (e) {
    const characterCode = e.key
    if (characterCode === 'Backspace') return

    const characterNumber = Number(characterCode)
    if (characterNumber >= 0 && characterNumber <= 9) {
      if (e.currentTarget.value && e.currentTarget.value.length) {
        return
      } else if (characterNumber === 0) {
        e.preventDefault()
      }
    } else {
      e.preventDefault()
    }
  }

  return (
    <>
      <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
          <h1 className="colorH1">Jinsingiz</h1>
          <QuizformWrapper>
            <div className="row justify-content-between">
              <div className="mt-2 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                <div className="d-flex borderr align-items-center justify-content-between rounded py-1 px-1" onClick={props.selectGender}>
                  <div className="d-flex gap-2 bg-white">
                    <img src={erkak} alt="" />
                    <label htmlFor="MALE" className="m-0">Erkak</label>
                  </div>
                  <div className="bg-white">
                    <input
                      type="radio"
                      id={"MALE"}
                      value={"MALE"}
                      onChange={(e) => props.select(e)}
                      name="gender"
                      className="form-check-input"

                    />
                  </div>
                </div>
              </div>
              <div className=" mt-2 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ">
                <div className="d-flex borderr align-items-center justify-content-between   rounded py-1 px-1">
                  <div className="d-flex gap-2">
                    <img src={ayol} alt="" />
                    <label htmlFor="FEMALE" className="m-0">Ayol</label>
                  </div>
                  <div className="">
                    <input
                      id="FEMALE"
                      type="radio"
                      value={"FEMALE"}
                      onChange={(e) => props.select(e)}
                      name="gender"

                      className="form-check-input"
                    />
                  </div>
                </div>
              </div>
            </div>
          </QuizformWrapper>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
          <h1 className="colorH1">Ismingiz</h1>
          <QuizformWrapper className="mt-3">
            <input type="text" className="formInput" onChange={(e) => props.select(e)} name="name" placeholder="Ismingiz" />
          </QuizformWrapper>
        </div>
        <div className="col-xl-4  col-lg-4 col-md-4 col-sm-6 col-12">
          <h1 className="colorH1">Yoshingiz</h1>
          <QuizformWrapper className="mt-3">
            <input id="myAge" onKeyDown={handleKeypress} type="number" className="formInput" min="0" max="200" name="age" onChange={(e) => props.select(e)} placeholder="Yoshingiz" />
          </QuizformWrapper>
        </div>
      </div>
    </>
  );
}
