import { PerspectiveCamera, View } from "@react-three/drei"
import Lights from "./Lights";
import { Suspense } from "react";



const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.3} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights>
      </Lights>
      <Suspense fallback={<html><div>Loading</div></html>}>
      </Suspense>

    </View >
  );
};

export default ModelView;