import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "../index.css";
import {
  Form,
  Input,
  Select,
  InputNumber,
  Checkbox,
  Button,
  Layout,
  Space,
  message,
  Alert
} from "antd";
const { Option } = Select;


const { Content, Footer } = Layout;




const Webform = ({renderobjects,setrenderobjects}) => {
  const [componentSize, setComponentSize] = useState("default");
  const [ConformationText, setConformationText] = useState(false );
 
 
  const [visibleShape, setvisibleShape] = useState('empty');

  const [form] = Form.useForm();
  

   
  
  const [value, setValue] = useState('');
 

  
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const onChange = (checkedValue,value) => {

    console.log('checked',checkedValue);
    console.log('checkedV',value);
    
  };
  const onFinish = values => {
    setConformationText(true);
   const renderStore = renderobjects; 
   const temp = [] ;
     Object.entries(values).map((entry) => {
    if( entry[0] !== "Objects")
    { temp.push(entry)}});
    renderStore.push(temp);
    setrenderobjects(renderStore);
    setvisibleShape(value);
    
    };


  console.log('webform',renderobjects);
  
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  const dropdownHandler = value => {
     
    setvisibleShape(value);
     
   };
   


  const Sphereform = () => {
    return(
  
  <Form.Item label="Enter the  radius" name="Radius" rules={[
     {
      required: visibleShape === 'sphere'? true : false,
      message: 'Please enter the radius!',
     },

  ]}hidden = {visibleShape === 'sphere'? false : true}>
  <InputNumber step={0.1}/>
  </Form.Item>

    );
};
const Coneheightform = () => {
  return (
    <Form.Item label="Enter the height " name="height" rules={[
       {
        required: visibleShape === 'cone'? true : false,
        message: 'Please enter the height!',
       },

    ]}hidden = {visibleShape === 'cone'? false : true}>
    <InputNumber step={0.1}/>
    </Form.Item>

    
  );
};
const Coneradiusform = () =>{
return (
     <Form.Item label="Enter the radius" name="coneradius" rules={[
       {
         required:  visibleShape === 'cone'? true : false,
         message: 'Please enter the radius',
       },

    ]} hidden = {visibleShape === 'cone'? false : true}>
    <InputNumber step={0.1}/>
    </Form.Item>
 
)
};
const Cubeform = () => {
return (

   
    
    <Form.Item label="Enter the length of the side" name="side" rules={[
       {
        required: visibleShape === 'cube'? true : false,
        message: 'Please enter the length of side!',
       },

    ]}hidden = {visibleShape === 'cube'? false : true}>
    <InputNumber step={0.1}/>
    </Form.Item>
    
  );
};
const CuboidLengthform = () =>{
return(
   
  <Form.Item label= 'Enter the length of cuboid'  name="cuboidlength" rules={[
      {
        required: visibleShape === 'cuboid'? true : false,
        message: 'Please enter the length of cuboid ',
      },
    ]} hidden = {visibleShape === 'cuboid'? false : true}>
      <InputNumber step={0.1}/>
    </Form.Item>
    
  );
};
const CuboidHeightform = () => {
return(
  <Form.Item label="Enter the height of cuboid" name="cuboidheight" rules={[
    {
      required: visibleShape === 'cuboid'? true : false,
      message: 'Please enter the height of cuboid',
    },
  ]} hidden = {visibleShape === 'cuboid'? false : true}>
    <InputNumber step={0.1}/>   
  </Form.Item>
  
  
);
};
const CuboidBreadthform = () =>{
  return(
  
    <Form.Item label="Enter the breadth of cuboid" name="cuboidbreadth" rules={[
      {
        required: visibleShape === 'cuboid'? true : false,
        message: 'Please enter the height of cuboid',
      },
    ]} hidden = {visibleShape === 'cuboid'? false : true}>
      <InputNumber step={0.1}/>   
    </Form.Item>
    

  );
};
  return (
    

   <Layout style ={{backgroundColor:"black"}}>
    <Content 
      className="site-layout"
      style={{backgroundColor:"white",padding: "30px", margin: 64,textAlign:"center" }}
    >
      
      <Space align="center">
       
      <Form 
      form={form}
      
      style={{ContentAlign:"left"}}
          labelCol={{
      span: 14
    }}
    wrapperCol={{
      span: 14
    }}
  
     initialValues={{
       size: componentSize
     }}

    onValuesChange={onFormLayoutChange}
     size={componentSize}
    
     onFinish={onFinish}
     onFinishFailed={onFinishFailed}

  >
   
    <Form.Item label="Name of the Object " name="Name of the Object" rules={[

      {
        required:true,
        message:'Please input the name!',
      }
    ]}>
      <Input />
    </Form.Item>
    
    <Form.Item label="Shape" name="Shape" rules={[
      {
        required: true,
        message: 'Please select the shape!',
      },
    ]}
>

      <Select 
       
       onChange={dropdownHandler}
      >
        
        <Option id = "sphere" value="sphere">Sphere</Option>
        <Option id = "cube" value="cube">Cube</Option>
        <Option id = "cuboid" value="cuboid">Cuboid</Option>
        <Option id = "cone" value="cone">Cone</Option>
        
        </Select>
        </Form.Item >
        {visibleShape === 'sphere'? <Sphereform/> : ''}
        {visibleShape === 'cube'? <Cubeform/> : ''}
        {visibleShape === 'cone'? <Coneheightform/> : ''}
        {visibleShape === 'cone'? <Coneradiusform/> : ''}
    
        {visibleShape === 'cuboid'? <CuboidLengthform/> : ''}
        {visibleShape === 'cuboid'? <CuboidBreadthform/> : ''}
        {visibleShape === 'cuboid'? <CuboidHeightform/> : ''}

  <Form.Item label="Colour" name = "Colour"rules={[
    {
      required: true,
      message: 'Please input colour!',
    },
  ]}>
    <Select>
      <Select.Option value ="red">Red</Select.Option>
      <Select.Option value ="green">Green</Select.Option>
      <Select.Option value ="yellow">Yellow</Select.Option>
      <Select.Option value ="blue">Blue</Select.Option>
      <Select.Option value = "orange">Orange</Select.Option>
    </Select>
  </Form.Item>
  
  
  <Form.Item label="Position:X" name="Positionx" rules={[
    {
      required: true,
      message: 'Please input position!',
    },
  ]}>
    <InputNumber step={0.1} />
  </Form.Item>
  <Form.Item label="Position:Y" name="Positiony" rules={[
    {
      required: true,
      message: 'Please input position!',
    },
  ]}>
    <InputNumber step={0.1} />
  </Form.Item><Form.Item label="Position:Z" name="Positionz" rules={[
    {
      required: true,
      message: 'Please input position!',
    },
  ]}>
    <InputNumber step={0.1} />
  </Form.Item>
  <Form.Item label="Ellipse Radius X" name="EllipseX" rules={[

    {
      required: true,
      message: 'Please input ellipse X radius'
    }
  ]}>
    <InputNumber step={0.1}/>
  </Form.Item>
  
  <Form.Item label="Ellipse Radius Y" name="EllipseY" rules={[

  {
    required: true,
    message: 'Please input ellipse Y radius'
  }
 ]}>
 <InputNumber step={0.1}/>
 </Form.Item>


  <Form.Item label="Camera Position" name = "cameraposition" >
    <Select>
    <Select.Option value ="front">Front</Select.Option>
    <Select.Option value ="top">Top</Select.Option>
    </Select>
  </Form.Item>
  
   {renderobjects.length === 0 ? 
      "" :   <Form.Item label="Choose objects to render" name="Objects">
      
          {renderobjects.map((value) => {return(
                
               <Checkbox defaultChecked={true} key={value[0][1]} onChange={(checkedValue)=>{onChange(checkedValue, value[0][1])}} className={value[0][1]}>{value[0][1]}</Checkbox>
                                 
            )
     })}
      
     </Form.Item>} 


  <Form.Item style={{marginLeft:212}} >
    <Button type = "primary" htmlType= "submit">Render</Button>
  </Form.Item>
          

          
         </Form>
 
     
 </Space>
     {ConformationText ? <Alert message="Success Text" type="success" />:null}
    </Content>
  </Layout>
           
  );
};
export default Webform;

