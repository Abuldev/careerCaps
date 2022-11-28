import { Spin } from 'antd'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { images } from '../../assets/images'
import yananima from "../../assets/images/reyting.svg"
import { instance } from '../../redux/actions'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function BirBalo(props) {
   const { One, Two, Three } = images
   const navigate = useNavigate()
   const [loader, setLoader] = useState(false)
   const [topUsers, setTopUsers] = useState([])
   const getTopUsers = () => {
      setLoader(true)
      instance.get("api/v1/platform_user/top_users?top=10").then((res) => {
         console.log(res.data.data);
         let rows = res.data.data[0].image = One
         rows = res.data.data[1].image = Two
         rows = res.data.data[2].image = Three
         setTopUsers(res.data.data)
         setLoader(false)
      }).catch((err) => {
         console.log(err);
      })
   }
   useEffect(() => {
      getTopUsers()
      console.log("topuserlar", topUsers);
   }, [])
   return (
      <Spin spinning={loader}>
         <div className="container">


            <div className='row'>
               <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 bg-white p-3">
                  <h1 className='colorH1'>{props.h1}</h1>
                  <p className='maxwidthP' style={{
                     "fontSize": "18px", "lineHeight": "2", "fontWeight": "500"
                  }}>{props.p}</p>
                  <div className='d-flex gap-3 my-5'>
                     <div>
                        <button className='reytingButton' onClick={() => navigate("/")}>
                           Chiqish
                        </button>
                     </div>
                     <div>
                        <button onClick={() => navigate("/quiz")} className="searchButton">
                           Restart
                        </button>
                     </div>
                  </div>
                  <h1 className="colorH1 mt-5">Top 10 reyting</h1>
                  {
                     topUsers.map((e, i) => <div className='mt-3' key={i}>
                        <div className="d-flex justify-content-between" key={i}>
                           <div>
                              <p className='m-0' style={{ "fontSize": "14px", "lineHeight": "28px", "fontWeight": "500" }}>
                                 {i + 1 > 3 ? i + 1 : <img src={e.image} alt="" />}   {e.name}
                              </p>
                           </div>
                           <div>
                              <p>
                                 {e.questions}-{e.trueAnsweredQuestions} | {e.time.slice(3, 8)}
                              </p>
                           </div>
                        </div>
                        <hr className='hr1' />
                     </div>)
                  }
               </div>
               <div className="d-flex justify-content-center align-items-center col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className='p-4'>
                     <LazyLoadImage effect={"blur"} className='img-fluid' src={yananima} alt="" />
                  </div>
               </div>
            </div>
         </div>
      </Spin>
   )
}
