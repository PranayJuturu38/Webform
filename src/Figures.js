import React, { Component}  from "react";
import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";
import e1 from "./textures/2_no_clouds_4k.jpg";
import e2 from "./textures/elev_bump_4k.jpg";
import e3 from "./textures/water_4k.png";

class Figures extends Component {
  
constructor(props) {
    super(props);
    this.state = {dimensions:props.dimensions};
  }
  componentDidMount() {
    this.sceneSetup();
    this.addModels();
    
    this.start();
    window.addEventListener("resize", this.handleWindowResize());
  }

  componentDidUpdate(prevProps,prevState) {
    
    console.log("prevProps ", prevProps);
    console.log("prevState ", prevState);

   
    if ((this.props.dimensions !== prevProps.dimensions   ) ) {
      
      
      console.log("Positions",this.props.dimensions);
      this.addShapes();
      this.cameraSetup();
      this.drawEllipse();
    }

  }
  shouldComponentUpdate(nextProps){
    
    if(this.props.dimensions !== nextProps.dimensions)
    {
      
      console.log("Positions",this.props.dimensions);
      this.addShapes();
      this.cameraSetup();
      this.drawEllipse();
      return true;
    }
   
  }
addShapes = () =>{
    console.log("addShapes",this.props.dimensions);
    
   
    if(this.props.dimensions.length !== 0) {
    
      this.props.dimensions.map((dim) =>{
        if(dim[1][1] === "cube")
        {  
          console.log("cube",this.props.dimensions);
         var geometry1 = new THREE.BoxGeometry(dim[9][1],dim[9][1],dim[9][1]);
         var material1 = new THREE.MeshLambertMaterial({color:dim[2][1]});
         var boxMesh = new THREE.Mesh(geometry1, material1);
         
         this.scene.add(boxMesh);
       
        
        boxMesh.position.set(dim[3][1],dim[4][1],dim[5][1]);
         
        
       }
       else if(dim[1][1] === "sphere")
       {
        console.log("sphere",this.props.dimensions);
         var geometrys = new THREE.SphereGeometry(dim[9][1],32,32);
         var materials = new THREE.MeshLambertMaterial({color:dim[2][1]});
         var sphereMesh = new THREE.Mesh(geometrys,materials);
         this.scene.add(sphereMesh);
         sphereMesh.position.set(dim[3][1],dim[4][1],dim[5][1]);
       }
       else if(dim[1][1] === "cone")
       {
         var geometryc = new THREE.ConeGeometry(dim[10][1],dim[9][1],64);
         var materialc = new THREE.MeshBasicMaterial({color:dim[2][1]});
         var coneMesh = new THREE.Mesh(geometryc, materialc);
         this.scene.add(coneMesh);
         coneMesh.position.set(dim[3][1],dim[4][1],dim[5][1]);
       } 
   
       else if(dim[1][1] === "cuboid")
       {
        
         var geometrycu = new THREE.BoxGeometry(dim[10][1],dim[11][1],dim[9][1]);
         var materialcu = new THREE.MeshLambertMaterial({color:dim[2][1]});
         var cuboidMesh = new THREE.Mesh(geometrycu, materialcu);
         
         this.scene.add(cuboidMesh);
       
        
        cuboidMesh.position.set(dim[3][1],dim[4][1],dim[5][1]);
        
       }
       
      } )
    
  
    }
    console.log("Afteraddshapes",this.props.dimensions);
  };
 
  cameraSetup = () =>{
    const width = this.el.clientWidth;
    const height = this.el.clientHeight;

    if(this.props.dimensions !== 0)
    {
      this.props.dimensions.map((dim) =>{
        
            if(dim[8][1] === "front"){
           
              this.camera.position.z = dim[5][1];
              this.camera.position.x = dim[3][1];
              this.camera.position.y = dim[4][1];
              this.camera.rotation.y = 90* THREE.Math.DEG2RAD;
            
             }
             else if(dim[8][1] === "top"){
          
              this.camera.position.z = dim[5][1]-20;
              this.camera.position.x = dim[3][1]-15;
              this.camera.position.y = dim[4][1];
              this.camera.rotation.x = -90* THREE.Math.DEG2RAD;
              
             }
         
             
      })
    }
  };
  drawEllipse = () => {
    if(this.props.dimensions !== 0)
    {
      this.props.dimensions.map((dim) =>{
    
    var curve = new THREE.EllipseCurve(
      0,  0,            // ax, aY
      dim[6][1],dim[7][1],           // xRadius, yRadius
      0,  2 * Math.PI,  // aStartAngle, aEndAngle
      false,            // aClockwise
      10                 // aRotation
    );
    
    var points = curve.getPoints( 50 );
    var geometryel = new THREE.BufferGeometry().setFromPoints( points );
    
    var materialel = new THREE.LineBasicMaterial( { color : 0xffffff } );
    var ellipse = new THREE.Line( geometryel, materialel );
    this.scene.add(ellipse);
    })
 
   }
 };
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
    window.cancelAnimationFrame(this.requestID);
    this.controls.dispose();
  }
  
  sceneSetup = () => {
    const width = this.el.clientWidth;
    const height = this.el.clientHeight;

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 30;
    this.camera.position.y = 5;
    this.camera.lookAt(0,0,0);
    
    // var helper = new THREE.CameraHelper( this.camera );
    // this.scene.add( helper );
    this.controls = new OrbitControls(this.camera, this.el);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor("#000000");
    this.renderer.setSize(width, height);
    this.el.appendChild(this.renderer.domElement);

    this.scene.add(new THREE.AmbientLight(0x333333));
    var light = new THREE.PointLight(0xffffff, 1);
    light.position.set(10, 10, 10);
     
    this.scene.add(light);
    var lights = new THREE.AmbientLight(0x333333)
    this.scene.add(lights);
    lights.position.set(40,30,30);
    light = new THREE.DirectionalLight(0xffffff, 1);
    this.scene.add(light);

    
  };

  addModels = () => {
    var geometry = new THREE.SphereGeometry(10, 35, 35);
    var material = new THREE.MeshPhongMaterial({
      map: THREE.ImageUtils.loadTexture(e1),
      bumpMap: THREE.ImageUtils.loadTexture(e2),
      bumpScale: 0.005,
      specularMap: THREE.ImageUtils.loadTexture(e3),
      specular: new THREE.Color("grey"),
    });
    this.earthMesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.earthMesh);
    this.earthMesh.position.set(0, 0, 0);
    
    var geo1 = new THREE.SphereGeometry(10, 35, 35);
    var mat1 = new THREE.MeshBasicMaterial();   
    var Mesh = new THREE.Mesh(geo1,mat1);
    this.scene.add(Mesh);
    Mesh.position.set(60,40,30);
    
    };
  start = () => {
    //this.earthMesh.rotation.x += 0.01;
    this.earthMesh.rotation.y += 0.01;
    
    this.renderer.render(this.scene, this.camera);

    // The window.requestAnimationFrame() method tells the browser that you wish to perform
    // an animation and requests that the browser call a specified function
    // to update an animation before the next repaint
    this.requestID = window.requestAnimationFrame(this.start);
  };
  handleWindowResize = () => {
    const width = this.el.clientWidth;
    const height = this.el.clientHeight;

    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;

    // Note that after making changes to most of camera properties you have to call
    // .updateProjectionMatrix for the changes to take effect.
    this.camera.updateProjectionMatrix();
  };

  render() {
    return (
      <div
        style={{ width: "1000px", height: "692px" }}
        ref={(ref) => {
          this.el = ref;
        }}
      />
    );
  }
}

export default Figures;
