// VideoToCanvas.jsx
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";
import "./VideoToCanvas.css"; // ← add this line
import { Head3 } from "./head3";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Eye } from "./eye";
import { Experience } from "./Experience";
function MouseFollower({ children, yaw = 1, pitch = 1 }) {
  const ref = useRef();

  useFrame(({ pointer }) => {
    if (!ref.current) return;

    // pointer.x  -1 ⟶ 1  (left ⟶ right)
    // pointer.y  -1 ⟶ 1  (bottom ⟶ top)
    ref.current.rotation.y = pointer.x * Math.PI * yaw; // turn head LEFT/RIGHT
    ref.current.rotation.x = -pointer.y * Math.PI * pitch; // look   UP/DOWN
  });

  return <group ref={ref}>{children}</group>;
}

export default function Landing() {
  const [started, setStarted] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);

  return (
    <div className="wrapper">
      {/* Start button */}
      {!started && (
        <button className="start-btn" onClick={() => setStarted(true)}>
          Start
        </button>
      )}

      <AnimatePresence>
        {/* Video stage */}
        {started && !showCanvas && (
          <motion.video
            key="video"
            className="video-full"
            src="/vid.mp4"
            autoPlay
            onEnded={() => setShowCanvas(true)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 4 }}
          />
        )}

        {/* 3-D canvas stage */}
        {showCanvas && (
          <motion.div
            key="canvas"
            className="canvas-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Canvas camera={{ position: [0, 1, 5] }}>
              <ambientLight intensity={2} />
              <directionalLight
                position={[5, 5, 5]}
                intensity={0.9}
                castShadow
                color={"#EAECED"}
              />
              <MouseFollower yaw={0.2} pitch={0.2}>
                <Head3
                  scale={[1.4, 1.4, 1.4]}
                  rotation-y={[0.01 * Math.PI]}
                  rotation-x={[-0.02 * Math.PI]}
                  //   rotation-z={[0]}
                  position={[0, -1.2, 0]}
                />
                {/* <Eye
                  scale={[0.07, 0.07, 0.07]}
                  position={[0.37, 0.32, 0.5]}
                  rotation-y={[1.4]}
                  rotation-x={[1.6]}
                /> */}
                {/* <Head2
                  scale={[1.5, 1.5, 1.5]}
                  rotation-y={[2.25 * Math.PI]}
                  rotation-x={[0.03 * Math.PI]}
                  rotation-z={[5.7]}
                  position={[0, -0.2, 0]}
                /> */}
              </MouseFollower>
              <Experience />
              {/* <Box /> */}
              <OrbitControls />
            </Canvas>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
