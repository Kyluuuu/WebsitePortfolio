import "./3D.css"

import * as THREE from 'three'

import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      }
      else {
          entry.target.classList.remove('show')
      }
  });
});

window.addEventListener('load', () => {
  const bar = document.querySelector('.navBar')
  bar.classList.add('showUp')
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))

const AspectRatio = window.innerWidth / window.innerHeight
const FOV = 75

const Scene = new THREE.Scene()
const Camera = new THREE.PerspectiveCamera(FOV, AspectRatio, 0.1, 1000)
const Renderer = new THREE.WebGLRenderer({
  canvas : document.querySelector("#background"), antialias: true,
})

Renderer.setPixelRatio(window.devicePixelRatio)
Renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8)

//HDR
const rgbeLoader = new RGBELoader();
rgbeLoader.load('../../images/sunset.hdr', function(texture) {
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


const lightModeButton = document.getElementById('lightModeButton');
const moonIcon = lightModeButton.querySelector(".moon");
const sunnyIcon = lightModeButton.querySelector(".sunny");

lightModeButton.addEventListener('click', () => {
    let lightBool = !JSON.parse(localStorage.getItem('lightModeOn'))
    toggleDarkMode(lightBool)
    localStorage.setItem('lightModeOn', String(lightBool))
});

toggleDarkMode(JSON.parse(localStorage.getItem('lightModeOn')))

function toggleDarkMode(lightBool) {
    console.log(lightBool)
    const blackText = document.querySelectorAll('.hidden');

    if (lightBool) {
        moonIcon.style.display = "none";
        sunnyIcon.style.display = "block";

        document.body.style.backgroundColor = 'white';
        blackText.forEach(element => {
            element.style.color = 'black';
        })
    }
    else {
        sunnyIcon.style.display = "none";
        moonIcon.style.display = "block";

        document.body.style.backgroundColor = '#333';
        blackText.forEach(element => {
            element.style.color = 'white';
        })
    }
}

function onWindowResize() {
  Camera.aspect = window.innerWidth / window.innerHeight;
  Camera.updateProjectionMatrix();
  Renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.8)
}


window.addEventListener('resize', onWindowResize);


