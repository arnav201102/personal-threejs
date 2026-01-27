import { Canvas } from "@react-three/fiber";
import CameraRig from "./CameraRig";
import HeartParticles from "./HeartParticles";

export default function DreamCanvas({ children }: any) {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} />
      <HeartParticles />
      <CameraRig />
      {children}
    </Canvas>
  );
}
