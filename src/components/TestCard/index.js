import React from 'react'
import { QuizJobCardWrapper } from '../../styles'

export default function TestCard(props) {
   return (
      <label htmlFor={props.id} className='col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mt-3'>

         <QuizJobCardWrapper>
            <div className="positionInput">
               <input disabled={props.isdisabled} id={props.id} value={props.id} onChange={(e) => props.select(props.id)} name="quizId" type="radio" className="form-check-input" />
            </div>
            <div>
               <p>{props.title}</p>
            </div>
         </QuizJobCardWrapper>
      </label>
   )
}
