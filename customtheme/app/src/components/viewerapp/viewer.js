import { createRoot } from 'react-dom/client'
import React, { useRef, useState, useEffect } from 'react'
import Header from '../layout/header/header';
import Box from './meshes/box'
import { Canvas, useFrame } from '@react-three/fiber'


const Viewer = (props) => {

  const[zoom, setZoom] = useState(45)

  useEffect(() => {
    setZoom(zoom)
  },[zoom])

  return(
    <div id='container' className='parallax'>
      <Header />
      <div style={{display: 'flex', width: '100%', height: '100%'}}>
        <div style={{width: 400, height: '100%', backgroundColor: 'white'}}>
          <button id='zoom-out' onClick={(e) => setZoom(zoom + 1)}>Zoom in</button>
          <button id='zoom-in' onClick={(e) => setZoom(zoom - 1)}>Zoom in</button>
        </div>
        <div id="canvas-container" style={{width: '100vw', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5'}}>
          <Canvas camera={{ position: [0, 0, 5], fov: zoom}}>
            <ambientLight intensity={0.1} />
            <directionalLight color="red" position={[0, 0, 5]} />
            <Box />
          </Canvas>
        </div>
      </div>
    </div>
  )
}

export default Viewer