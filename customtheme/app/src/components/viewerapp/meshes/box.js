import React, { useRef, useState, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'

const Box = (props) => {
  const mesh = useRef();
  const { viewport } = useThree()
  const [active, setActive] = useState(false);

  useFrame(({ mouse }) => {
    if(active) {
      const x = (mouse.x * viewport.width) / 2;
      const y = (mouse.y * viewport.height) / 2;
      mesh.current.rotation.set(-y, x, 0);  
    }
  });

  return(
    <mesh position={[0, 0, -1]} ref={mesh} onClick={(e) => setActive(!active)}>
      <boxGeometry args={[2, 2, 2]} rotation={[3, 1, 0]}/>
      <meshStandardMaterial />
    </mesh>
  )
}

export default Box