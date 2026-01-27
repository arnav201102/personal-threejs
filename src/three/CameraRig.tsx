import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";

export const cameraTargets = {
  welcome: new Vector3(0, 0, 10),
  memories: new Vector3(0, 0, 7),
  letter: new Vector3(0, 0, 5),
  finale: new Vector3(0, 0, 4),
};

export default function CameraRig() {
  const { camera } = useThree();
  const target = useRef(cameraTargets.welcome);

  useFrame(() => {
    camera.position.lerp(target.current, 0.04);
    camera.lookAt(0, 0, 0);
  });

  (window as any).setCameraTarget = (key: keyof typeof cameraTargets) => {
    target.current = cameraTargets[key];
  };

  return null;
}
