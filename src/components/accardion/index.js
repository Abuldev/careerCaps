import 'antd/dist/antd.css';
import React from 'react'
// import Collapsible from 'react-collapsible'
import { Collapse } from 'antd';
import './index.css'
export default function Example() {
   const { Panel } = Collapse;
   return (
      <Collapse defaultActiveKey={['1']}>
         <p>
            This is the collapsible content. It can be any element or React
            component you like.
         </p>
         <p>
            It can even be another Collapsible component. Check out the next
            section!
         </p>
      </Collapse>
   )
}
