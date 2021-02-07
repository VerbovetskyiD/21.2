const windowWidth = window.innerWidth;
const windowHeight = window.window.innerHeight;

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('scene'),
});
renderer.setClearColor('#217C7E');
renderer.setSize(windowWidth, windowHeight);

const camera = new THREE.PerspectiveCamera(
  50,
  windowWidth / windowHeight,
  1,
  10000
);
camera.position.set(0, 0, 500);

const light = new THREE.DirectionalLight('white', 1);
light.position.set(50, 250, 500);

const geometry = new THREE.BoxGeometry(100, 100, 100);

const texture = new THREE.MeshLambertMaterial({ color: '#F3EFE0' });

const cube = new THREE.Mesh(geometry, texture);
cube.rotation.y = Math.PI / 4;
cube.rotation.x = Math.PI / 4;

const scene = new THREE.Scene().add(camera).add(light).add(cube);
renderer.render(scene, camera);

(function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;
  renderer.render(scene, camera);
})();
