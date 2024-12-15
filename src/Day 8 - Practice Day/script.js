import * as THREE from 'three'
import GUI from 'lil-gui'
import gsap from 'gsap'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene Create
const scene = new THREE.Scene()

// Object
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'blue' })
)

// Add to scene
scene.add(mesh)

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 3
camera.lookAt(mesh.position)

// Orbit Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// Add to scene
scene.add(camera)

// Render
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.render(scene, camera)

// renderer.setAnimationLoop(animate)

// function animate() {

//     mesh.rotation.x += 0.01;
//     mesh.rotation.y += 0.01;

//     renderer.render(scene, camera);

// }

function tick() {

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)

}

tick()