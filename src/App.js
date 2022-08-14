import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { Model } from './gltf-components/Model'
import Home from './components/Home'
import './css/reset.css'
import './css/styles.css';

function App() {
  //------ Move this to correct component later ------//
  const ref = useRef()
  return (
    <div className='component-container'>
      <Home/>
      <Canvas className='three' shadows dpr={[1, 2]} camera={{position:[-100,50,100], fov: 85}}>
        <Suspense fallback={null}>
          <Stage controls={ref} preset="rembrandt" intensity={0.3}  environment="apartment" position={[0,-50,-50]}>
            <Model />
          </Stage>
        </Suspense>
        <OrbitControls ref={ref} />
      </Canvas>
    </div>
  )
}

export default App;
