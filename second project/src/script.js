import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects: crate the object that we want to render
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// mesh is the object that we want to move
// Position modifies the position of the object in the scene
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;
mesh.position.set(0.5, -0.5, 1);

// Scale modifies the size of the object
// mesh.scale.x = 2;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.5;
mesh.scale.set(1, 1, 0.5);

// Rotation modifies the rotation of the object
// by PI we can rotate the object 180 degrees if we want to rotate 90 degrees we can use PI/2
// // mesh.rotation.reorder("YXZ"); this is use to avoid gimbal lock that is when we rotate the object the axis changes with the object and some axis after the rotation are not the same as before and can be locked it make a order in the application of the rotation
// mesh.rotation.x = Math.PI * 0.25;
// mesh.rotation.y = Math.PI * 0.25;
// mesh.rotation.z = Math.PI * 0.25;
mesh.rotation.reorder("YXZ");
mesh.rotation.set(1, 1, 0);

// axis the 3 lines that help us to know the position of the object
const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

///// hasta aquí todo es enfocado al objeto que queremos renderizar (cubo rojo)

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera move closer or further from the object
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 5;
// camera.position.y = 1;
// camera.position.x = 1;
scene.add(camera);

camera.lookAt(mesh.position);

/**
 * Renderer render the scene with the camera
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
