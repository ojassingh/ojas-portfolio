import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, OrbitControls } from "@react-three/drei";
// import * as random from 'maath/random/dist/maath-random.esm';
import Navbar from "./Navbar";
import Typewriter from "typewriter-effect";

export default function App() {
  const Overlay = () => {
    return (
      <div>
        <h1 className="text-7xl font-bold bg-gradient-to-r from-rose-600 to-blue-800 text-transparent bg-clip-text brightness-175 text-center leading-normal">
          {/* Ojas Singh */}
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(50)
                .typeString("Hello, traveller.")
                .pauseFor(1000)
                .deleteAll(50)
                .typeString("I'm Ojas!")
                .pauseFor(1000)
                .deleteAll(50)
                .typeString("Welcome.")
                .start();
            }}
          />
        </h1>

        <Navbar />
      </div>
    );
  };

  return (
    <div className="h-screen w-screen relative">
      <div className="h-screen w-screen">
        <Canvas camera={{ position: [0, 0, 1] }}>
          {/* <OrbitControls/> */}
          <Stars />
        </Canvas>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Overlay />
      </div>
    </div>
  );
}

interface StarsProps {}

function Stars(props: StarsProps): JSX.Element {
  const ref = useRef<any>();
  const [sphere] = useState(() => {
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < positions.length; i++) {
      positions[i] = Math.random() * 3 - 1.5;
    }
    return positions;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        getObjectsByProperty={() => []}
        {...props}
      >
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
