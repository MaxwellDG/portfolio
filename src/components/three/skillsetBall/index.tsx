import { Decal, Float, useTexture } from "@react-three/drei";
import { SkillSet } from "../../../data/skillsData";

interface Props {
    skillset: SkillSet
}

export default function SkillsetBall({ skillset }: Props){

    // todo change to text. or maybe an image of the text if required
    const [decal] = useTexture([skillset.skills[0].icon])

    return (
        <Float speed={1} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.05]}/>
            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 1]}/>
                <meshStandardMaterial 
                    color="#fff8eb"
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal
                    position={[0,0,1]}
                    map={decal}
                />
            </mesh>
        </Float>
    )
}