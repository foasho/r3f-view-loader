import { useGLTF, Stage, Center } from "@react-three/drei";

const Model = () => {

  const { scene } = useGLTF('building.glb');

  return (
    <Stage>
      <Center>
        <group>
          <primitive object={scene} />
        </group>
      </Center>
    </Stage>
  )
};

export default Model;