import ProgressBar from 'react-bootstrap/ProgressBar';
import React from 'react'
import { useState } from 'react';
import './progres.css'
export default function Progress(props) {

   return (<>

      <ProgressBar isChild={true} now={props.now} label={`${props.now}`} >
         <span className='progressSpan'>{props.now}</span>
      </ProgressBar>

   </>

   )
}
