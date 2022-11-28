import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { instance } from '../../redux/actions'
import TestFooter from '../TestFooter'
import { VariantCardWrapper } from '../../styles'
import Result from '../Result'
import { Progress } from 'antd'
import { Spin } from 'antd'
import BirBalo from '../../pages/Reyting'
import { ClockCircleFilled } from '@ant-design/icons'
export default function Testing() {
   const { id } = useParams()
   const [disabled, setDisabled] = useState(false)
   const [message, setMessage] = useState('Belgilanmadi')
   const [allQ, setAllQ] = useState({})
   const [loader, setLoader] = useState(false)
   const [check, setCheck] = useState(false)
   const [count, setCount] = useState(0)
   const [timeLeft, setTimeLeft] = useState(0);
   const [r, setR] = useState(false)
   const [iTrue, setITrue] = useState(false)
   const [radioValue, setRadioValue] = useState(undefined)
   const [resultMessage, setResultMessage] = useState(
      'Sizdagi bilimlar qoniqarli emas'
   )
   const getTestQuestions = async () => {
      setCheck(false)
      try {
         setLoader(true)
         const res = await instance.get(
            `api/v1/platform_user/get_user_question/${id}`
         )
         setAllQ(res.data.data)
         console.log(res.data.data);
         setDisabled(false)
         setLoader(false)
         setTimeLeft(15)
      } catch (err) {
         console.log('getQuestions err', err)
      }
   }

   useEffect(() => {
      getTestQuestions()
   }, [])
   function funDisebled(timeLeftProp) {
      setCheck(true)
      setTimeLeft(0)
      setDisabled(true)
      const exactAnswer = allQ?.question?.answers?.filter((item) => {
         if (item.isTrue) {
            setRadioValue(item.id)
            return item.isTrue

         }
         return {}
      })
      const notTrue = allQ?.question?.answers?.filter((item) => {
         return !item.isTrue
      })
      // if (exactAnswer[0].isTrue) {
      //    setMessage("Javobingiz to'gri")
      //    setITrue(true)
      // } else {
      //    setMessage('Javobingiz xato')
      //    setITrue(false)
      // }xs
      if (notTrue) {
         setMessage("Javob berilmadi")

      }
      instance.post('api/v1/platform_user/save_user_answer', {
         userId: `${allQ.userId}`,
         answerId: `${notTrue[0].id}`,
      }).then((res) => {
         console.log(res.data);
      })
      setCount(allQ.questionNumber)
   }
   useEffect(() => {
      // console.log(timeLeft)
      if (timeLeft === 0) {
         setTimeLeft(0)
      }
      var interValid;
      if (!timeLeft) return;
      interValid = setInterval(() => {
         if (timeLeft === 1) {
            // alert("1 s qoldi")
            funDisebled(timeLeft)
         }
         setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(interValid);

   }, [timeLeft])
   const handleSelect = (event) => {
      setR(event);
   }
   useEffect(() => {
      setTimeout(() => {
         setAttr()
      }, 200);
   }, [allQ?.questionNumber])

   const select = (event, i) => {
      setRadioValue(i)
      setCheck(true)
      setTimeLeft(0)
      setDisabled(true)
      const exactAnswer = allQ?.question.answers.filter((item) => item.id === i)

      if (exactAnswer[0].isTrue) {
         setMessage("Javobingiz to'gri")
         setITrue(true)
      } else {
         setMessage('Javobingiz xato')
         setITrue(false)
      }
      instance.post('api/v1/platform_user/save_user_answer', {
         userId: `${allQ.userId}`,
         answerId: `${exactAnswer[0].id}`,
      }).then((res) => {
         console.log(res.data);
      })
      setCount(allQ.questionNumber)
   }

   if (allQ.allQuestionsCount == 0) {
      return <h1>Savollar mavjud emas</h1>
   }

   const watchClock = () => {
      return <ClockCircleFilled />
   }

   const setAttr = () => {
      const bg = document.querySelector(".ant-progress-bg")
      bg.setAttribute("data-content-bg", `${allQ?.questionNumber}`)
      console.log(bg);
   }
   return (
      <Spin spinning={loader}>
         {allQ.question == null ? (
            <div className='p-5 '>

               <div>
                  {allQ.result ? (
                     <>
                        <div>
                           {allQ.result.trueAnsweredQuestions >= 5 ? (
                              <>

                                 <BirBalo h1={"Tabriklaymiz!!!"} p={"O’z kelajagingizni tanlagan sohangiz bilan bog’lash uchun sizda yetarli bilimlar mavjud "} />
                              </>

                           ) : (
                              <>
                                 <BirBalo h1={
                                    "Sizdagi bilimlar qoniqarli emas"
                                 } p={
                                    "Siz boshqa kasbda qobiliyatli ekanligingizga ishonamiz!"
                                 } />
                              </>
                           )}
                        </div>
                        <Result
                           resultMessage={resultMessage}
                           setResultMessage={setResultMessage}
                           savollarSoni={allQ.result.answersCount}
                           trueAnswerCount={allQ.result.trueAnswersCount}
                           time={allQ.result.time}
                        />
                     </>
                  ) : (
                     <div>
                        <h1></h1>
                        <Link to={'/'}></Link>
                     </div>
                  )}
               </div>
            </div>
         ) : (
            <>
               <section className='py-5'>
                  <div className='container '>
                     <div className="px-2 py-1 rounded">
                        <Progress gapDegree={100} trailColor='#F0F0F0' strokeColor={"black"} format={() => `00:${timeLeft}`} strokeWidth={9} percent={Math.round((100 / allQ.allQuestionsCount) * count)} >
                           {/* <div className="ant-progress-bg" data-question-content={allQ?.questionNumber}></div> */}
                        </Progress>
                     </div>
                     <div className="d-flex">
                        <div>
                        </div>
                        <div>
                           {/* <ClockCircleOutlined /> */}
                        </div>
                     </div>

                     <div className='row'>
                        <div className='colorH1 mt-2'>
                           {allQ.question &&
                              `${allQ?.questionNumber + '' + '. ' + allQ.question?.title}`}
                        </div>
                     </div>
                     <div className='row justify-content-center'>
                        {allQ.question ? (
                           allQ.question?.answers?.map((e, i) => {
                              return (
                                 <label
                                    key={e.id}
                                    htmlFor={e.id}
                                    className='col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 mt-3'
                                 >
                                    <VariantCardWrapper>
                                       <div className='positionInput'>
                                          <input
                                             disabled={disabled}
                                             id={e.id}
                                             onClick={(event) => select(event, e.id)}
                                             name='quizId'
                                             type='radio'
                                             checked={e.id === radioValue}
                                             onChange={(e) => handleSelect(e.target.checked)}
                                             className='form-check-input'
                                          />
                                       </div>
                                       <div>
                                          <p>{e.answer}</p>
                                       </div>
                                    </VariantCardWrapper>
                                 </label>
                              )
                           })
                        ) : (
                           <h1>Savollar tugadi</h1>
                        )}
                     </div>
                  </div>
               </section>

               {check ? (
                  <TestFooter
                     setTimeLeft={setTimeLeft}
                     check={check}
                     setCheck={setCheck}
                     getTestQuestions={getTestQuestions}
                     isTrue={iTrue}
                     message={message}
                     allCount={allQ.allQuestionsCount}
                     count={allQ.questionNumber}
                  />
               ) : (
                  ''
               )}
            </>
         )}
      </Spin>
   )
}
