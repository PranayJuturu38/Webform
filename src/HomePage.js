import React from 'react';
import Webform from './Webform.js';
import Figures from './Figures';
import { Row, Col } from 'antd';


 const HomePage = () => {
     return (
   <Row>
         <Col span={50}>
             <Webform/>
         </Col>
         

         <Col span={50}>
             <Figures/>
         </Col>
    </Row>

     );
 }

 export default HomePage;