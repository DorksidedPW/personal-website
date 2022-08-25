import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

const Box = (props) => {
  const mesh = useRef();
  const [active, setActive] = useState(false);

  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  });

  console.log('BOX')

  return(
    <mesh position={[0, 0, -1]} ref={mesh}>
      <boxGeometry args={[2, 2, 2]} rotation={[3, 1, 0]}/>
      <meshStandardMaterial />
    </mesh>
  )
}

export default Box