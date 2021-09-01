import React, { Suspense } from 'react'
import { Canvas } from "react-three-fiber";
import { softShadows, OrbitControls, useGLTF, OrthographicCamera, useProgress } from "@react-three/drei";
import { CanvasContainer, Loading, LoadingBar, LoadingBarContainer } from './CanvasComponent.style';
import useWindowDimensions from '../../hooks/useWindowDimenstions';

const Loader = () => {
    const { active, progress } = useProgress();
    return (
        active && (
          <Loading className='loading'>
            <LoadingBarContainer className='loading-bar-container'>
              <LoadingBar className='loading-bar' style={{ width: progress }}>
              </LoadingBar>
            </LoadingBarContainer>
          </Loading>
        )
    );
  }

const FloorMesh = () => {
    return (
        <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -25, 0]}
        receiveShadow>
        <planeBufferGeometry attach='geometry' args={[100, 100]} />
        <shadowMaterial attach='material' opacity={0.3} />
      </mesh>
    );
  };

const Model = () => {
    const gltf =  useGLTF("/Models/scene.gltf");
    return (
        <primitive object={gltf.scene} dispose={null} />
    )
}

const CanvasComponent = () => {
    const  {width} = useWindowDimensions();
    softShadows();

    return (
        <CanvasContainer>
            <Canvas
                colorManagement
                shadowMap
            >
                <OrthographicCamera 
                    makeDefault 
                    position={[0, 40, 75]} 
                    zoom={width <= 600 ? 2 : 5} 
                    fov={60} 
                /> 
                <ambientLight intensity={0.3} />
                <directionalLight
                castShadow
                position={[0, 10, 0]}
                intensity={1.5}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
                />
            <Suspense fallback={null}>
                <pointLight position={[-10, 0, -20]} intensity={0.5} />
                <pointLight position={[0, -10, 0]} intensity={1.5} />
                <group>
                    <mesh position={[0, -25, 0]}>
                        <Model />
                    </mesh>
                    <FloorMesh />
                </group>
                <OrbitControls 
                    enablePan={false}
                    rotateSpeed={.25}
                    maxPolarAngle={0.5 * Math.PI}
                    minPolarAngle={0}
                    maxZoom={width <= 600 ? 5 : 15}
                    minZoom={width <= 600 ? 2 : 5}
                    zoomSpeed={.5}
                />
            </Suspense>
            </Canvas>
            <Loader />
        </CanvasContainer>
    )
}

export default CanvasComponent
