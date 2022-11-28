import { ClockCircleOutlined } from '@ant-design/icons'
import React from 'react'
export default function WatchClock() {
   return (
      <>
         {/* <video style={{ "width": "30px", "height": "30px" }} autoPlay loop muted src={watch}></video> */}
         <ClockCircleOutlined className='animatedClock' />
      </>
   )
}


