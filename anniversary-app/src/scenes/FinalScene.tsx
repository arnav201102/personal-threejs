import { Canvas } from "@react-three/fiber";
import { Text } from "@react-three/drei";

export default function FinalScene() {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={1.2} />

        <Text
          fontSize={0.6}
          color="#FF9AA2"
          anchorX="center"
          anchorY="middle"
        >
          Happy 4th Anniversary
        </Text>
      </Canvas>
    </div>
  );
}
