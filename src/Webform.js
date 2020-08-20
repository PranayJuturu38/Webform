import React, { useState , useEffect } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
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
const Webform = () => {
  const [componentSize, setComponentSize] = useState("default");
  const [ConformationText, setConformationText] = useState(false );
  const [visibleSphere, setvisibleSphere] = useState('true');
  const [visibleCube, setvisibleCube] = useState('true');
  const [visibleCone, setvisibleCone] = useState('true');
  const [visibleCuboid, setvisibleCuboid] = useState('true');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const onFinish = values => {
    console.log('Success:', values);
    setConformationText(true);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  const dropdownHandler = value => {
     
    console.log(value);
    console.log(visibleCube);
    
     switch(value)
     {
       case 'sphere':setvisibleSphere('false');
                      break;
       case 'cube': setvisibleCube('false');
                      console.log(visibleCube);
    
                      break;
       case 'cuboid':setvisibleCuboid('false');
                     break;
       case 'cone' : setvisibleCone('false');
                     break;
       default : console.log('wrong choice');
                                     
     }

     
   };
   console.log(visibleCube);

  
  const[ Formfigures,setFormfigures ]= useState(
  
    <Form style={{ContentAlign:"left"}}
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
    
  </Form>
   );
  
   const [RenderForm, setRenderForm] = useState(Formfigures);

//   useEffect(() => {
//     console.log('heo')
//     setFormfigures( 
//        <Form style={{ContentAlign:"left"}}
//     labelCol={{
//       span: 14
//     }}
//     wrapperCol={{
//       span: 14
//     }}
  
//      initialValues={{
//        size: componentSize
//      }}

//     onValuesChange={onFormLayoutChange}
//      size={componentSize}
    
//      onFinish={onFinish}
//      onFinishFailed={onFinishFailed}

//   >
   
//     <Form.Item label="Name of the Object " name="Name of the Object" rules={[

//       {
//         required:true,
//         message:'Please input the name!',
//       }
//     ]}>
//       <Input />
//     </Form.Item>
    
//     <Form.Item label="Shape" name="Shape" rules={[
//       {
//         required: true,
//         message: 'Please select the shape!',
//       },
//     ]}
// >

//       <Select 
       
//        onChange={dropdownHandler}
//       >
        
//         <Option id = "sphere" value="sphere">Sphere</Option>
//         <Option id = "cube" value="cube">Cube</Option>
//         <Option id = "cuboid" value="cuboid">Cuboid</Option>
//         <Option id = "cone" value="cone">Cone</Option>
        
//       </Select>
//     </Form.Item >
    
//     <Form.Item label="Enter the  radius" name="Radius" rules={[
//        {
//         required: !visibleSphere,
//         message: 'Please enter the radius!',
//        },

//     ]}hidden = {visibleSphere}>
//     <InputNumber step={0.1}/>
//     </Form.Item>

//     <Form.Item label="Enter the length of the side" name="side" rules={[
//        {
//         required: !visibleCube,
//         message: 'Please enter the length of side!',
//        },

//     ]}hidden = {visibleCube}>
//     <InputNumber step={0.1}/>
//     </Form.Item>
    
//     <Form.Item label="Enter the height " name="height" rules={[
//        {
//         required: !visibleCone,
//         message: 'Please enter the height!',
//        },

//     ]}hidden = {visibleCone}>
//     <InputNumber step={0.1}/>
//     </Form.Item>

//     <Form.Item label="Enter the radius" name="coneradius" rules={[
//        {
//          required: !visibleCone,
//          message: 'Please enter the radius',
//        },

//     ]} hidden = {visibleCone}>
//     <InputNumber step={0.1}/>
//     </Form.Item>
    

    

//     <Form.Item label= 'Enter the length of cuboid'  name="cuboidlength" rules={[
//       {
//         required: !visibleCuboid,
//         message: 'Please enter the length of cuboid ',
//       },
//     ]} hidden = {visibleCuboid}>
//       <InputNumber step={0.1}/>
//     </Form.Item>
    
//     <Form.Item label="Enter the breadth of the cuboid" name="cuboidbreadth" rules={[
//       {
//         required: !visibleCuboid,
//         message: 'Please enter the breadth of the cuboid',
//       },
//     ]} hidden = {visibleCuboid}>
//       <InputNumber  step={0.1}/>   
//     </Form.Item>
    
//     <Form.Item label="Enter the height of the cuboid" name="cuboidheight" rules={[
//       {
//         required: !visibleCuboid,
//         message: 'Please enter the height of cuboid',
//       },
//     ]} hidden = {visibleCuboid}>
//       <InputNumber step={0.1}/>   
//     </Form.Item>
    
//     <Form.Item label="Colour" name = "Colour"rules={[
//       {
//         required: true,
//         message: 'Please input colour!',
//       },
//     ]}>
//       <Select>
//         <Select.Option value ="red">Red</Select.Option>
//         <Select.Option value ="green">Green</Select.Option>
//         <Select.Option value ="yellow">Yellow</Select.Option>
//         <Select.Option value ="blue">Blue</Select.Option>
//        <Select.Option value = "orange">Orange</Select.Option>
//       </Select>
//     </Form.Item>
    
//     <Form.Item label="Position" name="Position" rules={[
//       {
//         required: true,
//         message: 'Please input position!',
//       },
//     ]}>
//       <InputNumber step={0.1} />
//     </Form.Item>
   
 
   
//     <Form.Item style={{marginLeft:212}} >
//       <Button type = "primary" htmlType= "submit">Render</Button>
//     </Form.Item>

    
//   </Form>)
//    console.log(Formfigures,"Heloe");
//    setRenderForm( ()=>{
//      return Formfigures;}
//    )
//   },[visibleSphere,visibleCube,visibleCuboid,visibleCone])
  
//   console.log(Formfigures,"Hi");

  const Sphereform = () => {
   <Form style={{ContentAlign:"left"}}
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
 
  <Form.Item label="Enter the  radius" name="Radius" rules={[
     {
      required: !visibleSphere,
      message: 'Please enter the radius!',
     },

  ]}hidden = {visibleSphere}>
  <InputNumber step={0.1}/>
  </Form.Item>
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
  
  <Form.Item label="Position" name="Position" rules={[
    {
      required: true,
      message: 'Please input position!',
    },
  ]}>
    <InputNumber step={0.1} />
  </Form.Item>
 

 
  <Form.Item style={{marginLeft:212}} >
    <Button type = "primary" htmlType= "submit">Render</Button>
  </Form.Item>

  
</Form>

};
const Coneform = () => {
  <Form style={{ContentAlign:"left"}}
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
   
    
    <Form.Item label="Enter the height " name="height" rules={[
       {
        required: !visibleCone,
        message: 'Please enter the height!',
       },

    ]}hidden = {visibleCone}>
    <InputNumber step={0.1}/>
    </Form.Item>

    <Form.Item label="Enter the radius" name="coneradius" rules={[
       {
         required: !visibleCone,
         message: 'Please enter the radius',
       },

    ]} hidden = {visibleCone}>
    <InputNumber step={0.1}/>
    </Form.Item>
    

    
    
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
    
    <Form.Item label="Position" name="Position" rules={[
      {
        required: true,
        message: 'Please input position!',
      },
    ]}>
      <InputNumber step={0.1} />
    </Form.Item>
   
 
   
    <Form.Item style={{marginLeft:212}} >
      <Button type = "primary" htmlType= "submit">Render</Button>
    </Form.Item>

    
  </Form>
};
const Cubeform = () => {
<Form style={{ContentAlign:"left"}}
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
   
    
    <Form.Item label="Enter the length of the side" name="side" rules={[
       {
        required: !visibleCube,
        message: 'Please enter the length of side!',
       },

    ]}hidden = {visibleCube}>
    <InputNumber step={0.1}/>
    </Form.Item>
    
    
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
    
    <Form.Item label="Position" name="Position" rules={[
      {
        required: true,
        message: 'Please input position!',
      },
    ]}>
      <InputNumber step={0.1} />
    </Form.Item>
   
 
   
    <Form.Item style={{marginLeft:212}} >
      <Button type = "primary" htmlType= "submit">Render</Button>
    </Form.Item>

    
  </Form>
};
const Cuboidform = () =>{
<Form style={{ContentAlign:"left"}}
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
   

    <Form.Item label= 'Enter the length of cuboid'  name="cuboidlength" rules={[
      {
        required: !visibleCuboid,
        message: 'Please enter the length of cuboid ',
      },
    ]} hidden = {visibleCuboid}>
      <InputNumber step={0.1}/>
    </Form.Item>
    
    <Form.Item label="Enter the breadth of the cuboid" name="cuboidbreadth" rules={[
      {
        required: !visibleCuboid,
        message: 'Please enter the breadth of the cuboid',
      },
    ]} hidden = {visibleCuboid}>
      <InputNumber  step={0.1}/>   
    </Form.Item>
    
    <Form.Item label="Enter the height of the cuboid" name="cuboidheight" rules={[
      {
        required: !visibleCuboid,
        message: 'Please enter the height of cuboid',
      },
    ]} hidden = {visibleCuboid}>
      <InputNumber step={0.1}/>   
    </Form.Item>
    
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
    
    <Form.Item label="Position" name="Position" rules={[
      {
        required: true,
        message: 'Please input position!',
      },
    ]}>
      <InputNumber step={0.1} />
    </Form.Item>
   
 
   
    <Form.Item style={{marginLeft:212}} >
      <Button type = "primary" htmlType= "submit">Render</Button>
    </Form.Item>

    
  </Form>
};
  return (
   <Layout style ={{backgroundColor:"black"}}>
    <Content 
      className="site-layout"
      style={{backgroundColor:"white",padding: "30px", margin: 64,textAlign:"center" }}
    >
      
      <Space align="center">
      <RenderForm/> 
      {visibleCone}
      </Space>
     {ConformationText ? <Alert message="Success Text" type="success" />:null}
    </Content>
  </Layout>
           
  );
 
};
export default Webform;

