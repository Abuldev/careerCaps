import React, { useState } from 'react'
import QuizForm from '../../components/QuizForm'
import SearchForm from '../../components/SearchForm'
import QuizJobCard from '../../components/QuizJobCard'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { instance, loadJobs } from '../../redux/actions'
import TestWarningModal from '../../components/TestWarningModal'
import { Spin } from 'antd'
export default function Quiz() {
  const dispatch = useDispatch()
  const kasb = useSelector((state) => state.jobsData.quizzes)
  const [isChecked, setIsChecked] = useState(false)
  const [kasblar, setKasblar] = useState([])
  const [loader, setLoader] = useState(false)
  const [user, setUser] = useState({
    gender: '',
    name: '',
    age: '',
    quizId: '',
  })
  const [show, setShow] = useState(false)
  const [search, setSearch] = useState('')
  const [searchLoader, setSearchLoader] = useState(false)
  const [userId, setUserId] = useState('')
  const [quizId, setQuizId] = useState('')
  const checkRadio = (e) => { }
  const searchJob = () => {
    setSearchLoader(true)
    instance.get("api/v1/quiz?search="+ search).then(function (res){
      setKasblar(res.data.data)
      setSearchLoader(false)
    }).catch(function (err) {
      setSearchLoader(false)
    })
  }
  useEffect(() => {
    dispatch(loadJobs())
  }, [])

  useEffect(() => {
    setKasblar([...kasb])
  }, [kasb])
  const select = (e) => {
    const { name, value } = e.target
    user[name] = value
    setUser({ ...user })
  }
  const handleShow = () => {
    setShow(true)
  }
  const handleClose = () => {
    setShow(false)
  }
  const valid = ({ name, age, gender, quizId }) => {
    const err = {}

    if (!name) {
      err.name = "Iltimos to'liq ismingizni kiriting"
    } else if (name.length > 25) {
      err.name = 'Ismingiz uzunligi 25 ta belgidan oshmasligi kerak'
    }

    if (!age) {
      err.age = 'Iltimos username kiriting'
    } else if (age <= 0) {
      err.age = "Yoshingiz 0 dan yuqori bo'lishi kerak"
    }
    if (!gender) {
      err.gender = 'Iltimos jinsingizni tanlang'
    }
    if (!quizId) {
      err.quizId = 'iltimos kasbingizni tanlang'
    }

    return {
      errMsg: err,
      errLength: Object.keys(err).length,
    }
  }
  const handleSubmit = (e) => {

    e.preventDefault()
    const res = valid(user)
    if (res.errLength) {
      return alert("To'ldirilganligiga ishonch hosil qiling")
    }
    setLoader(true)
    instance
      .post('api/v1/platform_user/create_with_quiz', user)
      .then((res) => {
        setUserId(res?.data.data.userId)
        setQuizId(res?.data.data.quizId)
        setLoader(false)
        handleShow()
      })
      .catch((err) => {
        console.log(err)
      })

  }


  return (
    <Spin spinning={loader}>
      <div className='py-5 container px-5'>
        <QuizForm
          select={select}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />
      </div>
      <section className='py-5'>
        <div className='container px-5'>
          <h1 className='colorH1'>Kasbni tanlang</h1>
          <SearchForm  searchData={searchJob} searchJob={(e)=>setSearch(e)} />
          <Spin spinning={searchLoader}>
              <div className='row'>
                  {kasblar.length === 0
                      ? "Kasblar topilmadi!"
                      : kasblar.map((item, i) => (
                          <QuizJobCard
                              select={select}
                              isChecked={isChecked}
                              setIsChecked={setIsChecked}
                              checkRadio={checkRadio}
                              key={i}
                              yearlySalary={item.yearlySalary}
                              id={item.id}
                              img={item.attachment}
                              jobName={item.name}
                          />
                      ))}
                  <div className='text-start mt-4'>
                      <button onClick={handleSubmit} className='searchButton'>
                        {loader ? <Spin/> : "Keyingisi"}
                      </button>
                      {show ? (
                          <TestWarningModal
                              userId={userId}
                              show={show}
                              setShow={setShow}
                              handleClose={handleClose}
                              handleShow={handleShow}
                          />
                      ) : (
                          ''
                      )}
                  </div>
              </div>
          </Spin>
        </div>
      </section>
    </Spin>
  )
}
