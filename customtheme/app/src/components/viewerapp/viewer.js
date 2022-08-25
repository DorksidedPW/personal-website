import { createRoot } from 'react-dom/client'
import React, { useRef, useState, useEffect } from 'react'
import Header from '../layout/header/header';
import Box from './meshes/box'
import { Canvas, useFrame, useThree } from '@react-three/fiber'


const Viewer = (props) => {
  const[canvasProperties, setCanvasProperties] = useState({
    zoom: 45,
    intensity: 0.1
  })
  
  return(
    <div id='container' className='parallax'>
      <Header />
      <div style={{display: 'flex', width: '100%', height: 'calc(100% - 80px'}}>
        <div style={{width: 400, height: '100%', backgroundColor: 'white'}}>
          <button id='zoom-out'>Zoom in</button>
          <button id='zoom-in'>Zoom in</button>
        </div>
        <div id="canvas-container" style={{width: '100vw', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5'}}>
          <Canvas camera={{ position: [0, 0, 5], fov: canvasProperties.zoom}}>
            <ambientLight intensity={canvasProperties.intensity} />
            <directionalLight color="white" position={[0, 0, 5]} />
            <Box />
          </Canvas>
        </div>
      </div>
    </div>
  )
}

export default Viewer