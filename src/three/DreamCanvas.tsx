import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

export default function DreamCanvas({ children }: any) {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <Environment preset="sunset" />
      {children}
    </Canvas>
  );
}
