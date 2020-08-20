import React,{ Component } from "react";
import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";
import e1 from "./textures/2_no_clouds_4k.jpg";
import e2 from "./textures/elev_bump_4k.jpg"
import e3 from "./textures/water_4k.png"
import canvasCloud from "./textures/earthcloudmap.jpg"

class Figures extends Component {
  componentDidMount() {

    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    
    this.scene1 = new THREE.Scene();
    this.scene2 = new THREE.Scene();

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor("#000000");
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);

    this.camera1 = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera1.position.z = 20;
    this.camera1.position.y = 5;

    const controls = new OrbitControls(this.camera1, this.renderer.domElement);

    this.scene1.add(new THREE.AmbientLight(0x333333));
    var light = new THREE.PointLight(0xFFFFFF,1);
    light.position.set( 10, 10, 10 );
    this.scene1.add( light );

    var light = new THREE.DirectionalLight(0xFFFFFF,1);
     this.scene1.add(light);
    
    this.addModels();

    this.renderScene();
    
    this.start();
  }

  addModels() {
   
    var geometry = new THREE.SphereGeometry(10, 35, 35);
    var material = new THREE.MeshPhongMaterial({
      map: THREE.ImageUtils.loadTexture(e1),
        bumpMap: THREE.ImageUtils.loadTexture(e2),
        bumpScale:   0.005,
        specularMap: THREE.ImageUtils.loadTexture(e3),
        specular: new THREE.Color('grey') }

    );
    this.earthMesh= new THREE.Mesh(geometry, material);
    this.scene1.add(this.earthMesh);
    this.earthMesh.position.set=(0,0,0);
   
    var geometry   = new THREE.SphereGeometry(10, 35, 35)
    var material  = new THREE.MeshPhongMaterial({
                  map         : new THREE.Texture(canvasCloud),
                  side        : THREE.DoubleSide,
                  opacity     : 0.8,
                  transparent : true,
                  depthWrite  : false,
                 });
      var cloudMesh = new THREE.Mesh(geometry, material)
      this.earthMesh.add(cloudMesh);
   
  }

  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }
  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };
  stop = () => {
    cancelAnimationFrame(this.frameId);
  };
  animate = () => {
   
    if (this.earthMesh) this.earthMesh.rotation.y += 0.01;
    if (this.cloudMesh) this.cloudMesh.rotation.y += 0.01;
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };
  renderScene = () => {
    if (this.renderer) this.renderer.render(this.scene1, this.camera1);
  };

 
  render() {
    return (
      <div
        style={{ width: "1000px", height: "692px" }}
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}
export default Figures;
