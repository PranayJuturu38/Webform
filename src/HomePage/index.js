import React,{useState ,useEffect} from 'react';
import { Row, Col } from 'antd';

import Webform from '../WebForm/index.js';
import Figures from "../Figures";




   
 const HomePage = () => {
    
    const [renderobjects, setrenderobjects] = useState([]);  
    const [dimensions,setdimensions] = useState([]);
    
    useEffect(()=>{
 
     console.log("useEffectHome",renderobjects);
    },[dimensions])
    
    const onChange = (value) => {
      const dimensionStore =  [];
      
     setrenderobjects(value);
      
     console.log("value",value);
      
      console.log("OnChangeChange",renderobjects);
      
       setTimeout(() => {
           
        setdimensions(renderobjects);
       // setrenderobjects(renderobjects); 
        
      },3000)
      console.log("Beforeonchange",dimensions); 
    };
   
    console.log("Afteronchange",renderobjects);
    return (
   <Row>
         <Col span={50}>
             <Webform 
             renderobjects={renderobjects}
             setrenderobjects={onChange} />
         
         </Col>
         

         <Col span={50}>
             <Figures 
             dimensions ={ dimensions}
             />
         </Col>
    </Row>
        
     );
     
 }


export default HomePage;

 