import "../indexPage/indexCSS.css"

import * as THREE from 'three'

import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

const AspectRatio = window.innerWidth / window.innerHeight
const FOV = 75

let pageEnum = Object.freeze({
  HOME: "HOME",
  PROJECTS: "PROJECTS",
  CONTACT: "CONTACT",
  ABOUT: "ABOUT",
});

let currentPage = pageEnum.HOME;

const Scene = new THREE.Scene()
const Camera = new THREE.PerspectiveCamera(FOV, AspectRatio, 0.1, 1000)
const Renderer = new THREE.WebGLRenderer({
  canvas : document.querySelector("#background"), antialias: true,
})

Renderer.setPixelRatio(window.devicePixelRatio)
Renderer.setSize(window.innerWidth, window.innerHeight)

//HDR
const rgbeLoader = new RGBELoader();
rgbeLoader.load('images/sunset.hdr', function(texture) {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    Scene.background = texture;
    Scene.environment = texture; 
});
//-

//GEOMETRY
const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
const material = new THREE.MeshStandardMaterial({
  color: 0xFF6347
})
const torus = new THREE.Mesh(geometry, material)

const torus1 = new THREE.Mesh(geometry, material)

Scene.add(torus)

torus1.position.set(10, 5, 50);
Scene.add(torus1)

const pointLight = new THREE.PointLight(0xffffff, 5000)
pointLight.position.set(20, 5, 5)

const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
ambientLight.position.set(20, 20, 20)

const gridHelper = new THREE.GridHelper(200, 50)

Scene.add(pointLight)
Scene.add(ambientLight)
Scene.add(gridHelper)

const controls = new OrbitControls(Camera, Renderer.domElement)
Camera.position.set(0, 0, 100)
//-


let scrollProgress = 0
const curve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(0, 0, 100),
  new THREE.Vector3(0, 0, 50),
  new THREE.Vector3(-5, 0, 0),
  new THREE.Vector3(5, 0, -50),
  new THREE.Vector3(0, 0, -100),
]);

Camera.position.set(0, 0, 100)
let targetRotation = new THREE.Euler(0, 0, 0); // Initial rotation (0 degrees)
let currentRotation = new THREE.Euler(0, 0, 0); // Current rotation

window.addEventListener('wheel', (event) => {
  if (currentPage === pageEnum.HOME) {

    const delta = (event.deltaY > 0) ? -0.03 : 0.03; 
    scrollProgress += delta;

    if (scrollProgress < 0) scrollProgress = 0
    if (scrollProgress > 1) scrollProgress = 1

    const newPosition = curve.getPointAt(scrollProgress);
    Camera.position.set(newPosition.x, newPosition.y, newPosition.z);

    const tangent = curve.getTangentAt(scrollProgress);
    Camera.lookAt(newPosition.clone().add(tangent));

    if (scrollProgress <= 0.25) {
      targetRotation.set(0, 0, 0); // No rotation at the start
    }
    else if (scrollProgress <= 0.5) {
      targetRotation.set(0, Math.PI / 2, 0); // 90 degrees clockwise at point 2
    }
    else if (scrollProgress <= 0.75) {
      targetRotation.set(0, -Math.PI / 2, 0); // 90 degrees counterclockwise at point 3
    }
    else {
      targetRotation.set(0, Math.PI, 0); // Optional rotation at the end of the curve
    }

    // Smoothly interpolate the rotation
    currentRotation.set(
      THREE.MathUtils.lerp(currentRotation.x, targetRotation.x, 0.05), // Interpolate x rotation
      THREE.MathUtils.lerp(currentRotation.y, targetRotation.y, 0.05), // Interpolate y rotation
      THREE.MathUtils.lerp(currentRotation.z, targetRotation.z, 0.05)  // Interpolate z rotation
    );

    // Apply the smoothly interpolated rotation to the camera
    Camera.rotation.set(currentRotation.x, currentRotation.y, currentRotation.z);
  }
});

let currentScroll = 0;

let strollStay = 3000;

let scrollLeft1 = 1000;

let scrollRight1 = 5000;

window.addEventListener('wheel', function(event) {
  if (currentPage === pageEnum.HOME) {
    currentScroll -= event.deltaY;

    if (currentScroll < 0) currentScroll = 0

    const left = document.getElementById("leftTextBox");
    if (currentScroll >= scrollLeft1 && currentScroll <= scrollLeft1 + strollStay) {
      left .classList.add("show");
    }
    else {
      left .classList.remove("show");
    }

    const right = document.getElementById("rightTextBox");
    if (currentScroll >= scrollRight1 && currentScroll <= scrollRight1 + strollStay) {
      right.classList.add("show");
    }
    else {
      right.classList.remove("show");
    }
  }
});

//BUTTON EVENTS
const homeButton = document.getElementById('homeButton');

homeButton.addEventListener('click', () => {
  resetPage(pageEnum.HOME);
  Camera.position.set(0, 0, 100)
});

const projectsButton = document.getElementById('projectsButton');
let projectsPage = document.getElementById('projectsPage');

projectsButton.addEventListener('click', () => {
  projectsPage.classList.add("show");
  resetPage(pageEnum.PROJECTS);
  Camera.position.set(-300, 300, 0)
  Camera.rotation.set(0, -Math.PI / 2, 0)
  Camera.rotateX(-Math.PI / 4)
});

function resetPageProject() {
  projectsPage.classList.remove("show");
}
//--


//RESET PAGE
function resetPage(page) {
  if (currentPage === page) return
  if (currentPage !== pageEnum.PROJECTS) {
    resetPageProject()
  }
  currentScroll = 0;
  scrollProgress = 0 
  currentPage = page
  Camera.rotation.set(0, 0, 0)
}
//-


//RUNNING PER FRAME
function animate() {
  requestAnimationFrame(animate)

  torus.rotation.y += 0.01
  torus.rotation.x += 0.01
  torus.rotation.z += 0.01

  controls.update()

  Renderer.render(Scene, Camera)
}

animate()
//--
