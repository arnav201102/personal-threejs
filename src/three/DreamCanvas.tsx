import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

export default function DreamCanvas({ children }: any) {
  const isMobile = window.innerWidth < 640;

  return (
    <Canvas
      camera={{
        position: [0, 0, isMobile ? 7.5 : 6],
        fov: isMobile ? 65 : 55,
      }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <Environment preset="sunset" />
      {children}
    </Canvas>
  );
}
