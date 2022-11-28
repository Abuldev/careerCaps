import React from 'react'
import { QuizJobCardWrapper } from '../../styles'
import { BASE_URL } from "../../utils/constans";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function QuizJobCard(props) {
  return (
    <label
      htmlFor={props.id}
      className={`col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mt-3 ${props.yearlySalary == null || props.yearlySalary == "" ? "d-none" : ""}`}
    >
      <QuizJobCardWrapper>
        <div className='positionInput'>
          <input
            id={props.id}
            value={props.id}
            onChange={(e) => props.select(e)}
            name='quizId'
            type='radio'
            className='form-check-input'
          />
        </div>
        <div>
          <LazyLoadImage
            className='img-fluid'
            src={`${BASE_URL}api/v1/file/get/${props.img}`}
            alt=''
            effect={"blur"}
          />
          <h3>{props.jobName}</h3>
        </div>
      </QuizJobCardWrapper>
    </label>
  )
}
