import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, GizmoHelper, GizmoViewport } from "@react-three/drei";
import { Loading3D } from "./Loading3D";
import { Loading2D } from "./Loading2D";
import Model from "./Model";

function App() {
  return (
    <div style={{ height: "100dvh", width: "100dvw" }}>
      {/* <LoadingScene1/> */}
      {/* <LoadingScene2 /> */}
      <LoadingScene3 />
    </div>
  )
}

/**
 * Model Suspense Scene
 */
export const LoadingScene1 = () => {

  return (
    <Canvas shadows>
      <ambientLight intensity={1}/>
      <pointLight position={[3, 3, 3]}/>
      <directionalLight position={[-2, 3, 5]}/>
      <OrbitControls/>
      <React.Suspense fallback={<Loading3D/>}>
        <Model/>
      </React.Suspense>
      <GizmoHelper alignment="top-right" margin={[75, 75]}>
        <GizmoViewport labelColor="white" axisHeadScale={1} />
      </GizmoHelper>
    </Canvas>
  )
}

/**
 * Preload Scene
 */
export const LoadingScene2 = () => {

  return (
    <React.Suspense fallback={<Loading2D/>}>
      <Canvas shadows>
        <ambientLight intensity={1}/>
        <pointLight position={[3, 3, 3]}/>
        <directionalLight position={[-2, 3, 5]}/>
        <OrbitControls/>
        <Model/>
        <GizmoHelper alignment="top-right" margin={[75, 75]}>
          <GizmoViewport labelColor="white" axisHeadScale={1} />
        </GizmoHelper>
      </Canvas>
    </React.Suspense>
  )
}

/**
 * Lazy Loading
 */
export const LoadingScene3 = () => {

  const LazyModel = React.lazy(() => import('./Model'));

  return (
    <Canvas shadows>
      <ambientLight intensity={1}/>
      <pointLight position={[3, 3, 3]}/>
      <directionalLight position={[-2, 3, 5]}/>
      <OrbitControls/>
      <Suspense fallback={<Loading3D/>}>
        <LazyModel />
      </Suspense>
      <GizmoHelper alignment="top-right" margin={[75, 75]}>
        <GizmoViewport labelColor="white" axisHeadScale={1} />
      </GizmoHelper>
    </Canvas>
  )
}



export default App