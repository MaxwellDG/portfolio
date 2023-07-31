import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"

export default function SkillsCube(props) {

    const meshRef = useRef()
    useFrame((state, delta) => (meshRef.current.rotation.x += delta / 4))
    useFrame((state, delta) => (meshRef.current.rotation.y += delta / 4))

    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    return (
      <mesh
        {...props}
        ref={meshRef}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
    >
        {/* <boxGeometry args={[3, 3, 3]} /> */}
        {/* <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} /> */}
      </mesh>
    )
  }