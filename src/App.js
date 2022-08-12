import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { Model } from './gltf-components/Model'
import './css/styles.css';

function App() {
  //------ Move this to correct component later ------//
  const ref = useRef()
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
      <Suspense fallback={null}>
        <Stage controls={ref} preset="rembrandt" intensity={0.3}  environment="apartment">
        false
          <Model />
        false
        </Stage>
      </Suspense>
      <OrbitControls ref={ref} />
    </Canvas>
  )
}

export default App;
