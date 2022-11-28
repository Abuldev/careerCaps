import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import logo from "../../assets/images/careercapslogo.svg"
import testwarning from "../../assets/images/testwarning.svg"
import 'antd/dist/antd.css';
import { useState } from 'react';
import { BlackOutlineBtn, OutlineBtn, TestWarningOutlineBtn } from '../../styles';
import { useNavigate } from 'react-router-dom';
// import './test.css'
export default function TestWarningModal(props) {
   const navigate = useNavigate()
   const startTest = () => {
      console.log("starttest ishladi");
      navigate(`/testing/${props.userId}`)
   }
   return (
      <div>

         <Modal aria-labelledby="example-modal-sizes-title-lg" size='lg' show={props.show} onHide={props.handleClose} >
            <Modal.Dialog>
               <div>
                  <img src={logo} alt="" />
               </div>


               <div className="row align-items-center w-100">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                     <div className="mt-5">
                        <h1 className='colorH1'>Test qoidalari bilan tanishing</h1>
                     </div>
                     <div className='mt-5'>
                        <p className='testP'>1. Har bir test savoli uchun sizga 15 sekund taqdim etiladi.</p>
                        <hr />
                        <p className="testP">2. Tanlagan variantingizni o'zgartirish mumkin emas</p>
                        <hr />
                        <p className="testP">3. Variant belgilash uchun berilgan 15 soniya tugashi bilan, variant belgilash imkoni yo'q.</p>
                        <hr />
                        <p className="testP">4. Tog'ri va noto'g'ri javoblar hisoblab boriladi, natija e'lon qilinadi.</p>
                     </div>

                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center align-items-center ">
                     <div className='imgFluid'>
                        <img className='img-fluid' src={testwarning} alt="" />
                     </div>
                  </div>
                  <div className="d-flex gap-2 mt-5 mb-3">
                     <div>
                        <TestWarningOutlineBtn onClick={props.handleClose}>
                           Chiqish
                        </TestWarningOutlineBtn>
                     </div>
                     <div>
                        <button onClick={startTest} className='searchButton'>
                           Boshlash
                        </button>
                     </div>
                  </div>
               </div>


            </Modal.Dialog>
         </Modal>

      </div >
   )
}
