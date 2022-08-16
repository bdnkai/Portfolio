import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage, Loader } from '@react-three/drei'
import { Model } from './gltf-components/Model'
import Home from './components/Home'
import './css/reset.css'
import './css/styles.css';


function App() {
  //------ Move this to correct component later ------//
  const ref = useRef()
  return (
    <>
    <div className='component-container'>
      <Home/>
    </div>
    <div className='canvas-container'> 
      <Canvas className='three' shadows dpr={[1, 2]} camera={{fov: 95}}>
        <Suspense fallback={null}>
          <Stage controls={ref} preset="rembrandt" intensity={0.3}  environment="apartment">
            <Model />
          </Stage>
        </Suspense>
        <OrbitControls ref={ref} />
      </Canvas>
      <Loader />
    </div>
    </>
  )
}

export default App;
