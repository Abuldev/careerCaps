import React from 'react'
import { TestWarningOutlineBtn } from '../../styles'

import { CloseCircleOutlined, CheckOutlined } from '@ant-design/icons'
import { useParams } from 'react-router-dom'
export default function TestFooter(props) {
   const { id } = useParams()
   console.log(props);
   return (
      <div className='py-4 bg-white text-center minHeightFooter mt-2  w-100'>
         <div className="row justify-content-center align-items-center">
            <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-12">
               <div className='d-flex gap-3 justify-content-center align-items-center'>
                  <div className='d-flex justify-content-center align-items-center'>
                     {
                        props.isTrue ? <CheckOutlined style={{ "fontSize": "35px", "color": "green" }} /> : <CloseCircleOutlined style={{ "fontSize": "35px", "color": "red" }} />
                     }
                  </div>
                  <div className='d-flex justify-content-end align-items-start flex-column'>
                     <p className="fw-bold mt-3  mb-0">{props.message}</p>
                     <p>{props.allCount} tadan {props.count} chi savol</p>
                  </div>
               </div>

            </div>
            <div className="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-12">
               <button onClick={() => props.getTestQuestions()} className='searchButton'>
                  Keyingisi
               </button>
            </div>
         </div>
      </div>
   )
}
