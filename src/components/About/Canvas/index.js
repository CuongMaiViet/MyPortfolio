import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'

/**
 * Base
 */
// Canvas
export default class Canvas {
  constructor(canvas) {

    const scene = new THREE.Scene()

    // Red cube
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshNormalMaterial({ flatShading: true })

    const addStar = () => {
      const donut = new THREE.Mesh(geometry, material)

      const scale = Math.random()
      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(50))

      donut.rotation.x = Math.random() * Math.PI
      donut.rotation.y = Math.random() * Math.PI
      donut.position.set(x, y, z)
      donut.scale.set(scale, scale, scale)

      scene.add(donut)
    }

    Array(500).fill().forEach(addStar)
    // Sizes
    const sizes = {
      width: canvas.parentElement.offsetWidth,
      height: canvas.parentElement.offsetHeight,
    }

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    )
    camera.position.z = 2
    scene.add(camera)

    // Controls
    const controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
    })
    renderer.setClearAlpha(0)
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    window.addEventListener('resize', () => {
      // Update sizes
      sizes.width = canvas.parentElement.offsetWidth
      sizes.height = canvas.parentElement.offsetHeight

      // Update camera
      camera.aspect = sizes.width / sizes.height
      camera.updateProjectionMatrix()

      // Update renderer
      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    const clock = new THREE.Clock()

    const tick = () => {
      const elapsedTime = clock.getElapsedTime()

      // Update controls
      controls.update()

      // Render
      renderer.render(scene, camera)

      // Call tick again on the next frame
      window.requestAnimationFrame(tick)
    }

    tick()
  }
}
