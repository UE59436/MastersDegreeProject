import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useThree } from "react-three-fiber";
import { softShadows, OrbitControls, useGLTF, OrthographicCamera, useProgress } from "@react-three/drei";
import { useDrag } from "react-use-gesture"
import { CanvasContainer, Loading, LoadingBar, LoadingBarContainer } from './CanvasComponent.style';
import useWindowDimensions from '../../hooks/useWindowDimenstions';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';

const Loader = () => {
    const { active, progress } = useProgress();
    useLockBodyScroll(active, [active]);
    
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

    const OvenBody = () => {
        const gltf =  useGLTF("/Models/ovenBody.glb");
        return (
            <primitive object={gltf.scene} dispose={null} />
        )
    }

    const OvenFront = ({ setOrbitRotationEnabled }) => {
        const gltf =  useGLTF("/Models/ovenFront.glb");
        const ref = useRef();
        const [rotation, setRotation] = useState([0, 0, 0])
        const {size, viewport} = useThree();
        let aspect = size?.width / viewport?.width

        const bind = useDrag(({ offset: [x, y], down }) => {
            if(down) {
                setOrbitRotationEnabled(false)
            } else {
                setOrbitRotationEnabled(true)
            }
            const rotationSpeed = .2;
            let degree = Math.PI * y * rotationSpeed / aspect;
            const min = 0;
            const max = Math.PI / 2.1

            setRotation([
                degree <= min ? 0 : degree >= max ? max : degree, 
                0, 
                0
            ]);
        }, { pointerEvents: true });

        return (
            <primitive ref={ref} {...bind()} position={[-1, -.25, -7.5]} rotation={rotation} object={gltf.scene} dispose={null} />
        )
    }
    
    const FloorMesh = () => {
        return (
            <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -11, 0]}
            receiveShadow>
        <planeBufferGeometry attach='geometry' args={[100, 100]} />
        <shadowMaterial attach='material' opacity={0.3} />
        {/* <meshBasicMaterial attach="material" color="pink" /> */}
      </mesh>
    );
};
    
    const CanvasComponent = () => {
    const  {width} = useWindowDimensions();
    const [orbitRotationEnabled, setOrbitRotationEnabled] = useState(true);
    softShadows();

    return (
        <CanvasContainer>
                <Canvas
                colorManagement
                shadowMap
            >
                <OrthographicCamera 
                    makeDefault 
                    position={[0, 15, 180]} 
                    zoom={width <= 600 ? 10 : 30} 
                    fov={80} 
                /> 
                <ambientLight intensity={0.3} />
                <directionalLight
                castShadow
                position={[0, 20, 0]}
                intensity={2}
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
                <pointLight position={[10, 0, 20]} intensity={0.5} />
                <pointLight position={[0, 10, 0]} intensity={1.5} />
                <group>
                <mesh 
                        position={[1, -9, 0]}
                        rotation={[0, Math.PI, -Math.PI]}
                    >
                        <OvenBody />
                        <OvenFront setOrbitRotationEnabled={setOrbitRotationEnabled} />
                        {/* <ModelInner /> */}
                        {/* <ModelOuter />
                        <ModelFront /> */}
                    </mesh>
                    {/* <FloorMesh /> */}
                </group>
                <OrbitControls 
                    enablePan={false}
                    enableRotate={orbitRotationEnabled}
                    rotateSpeed={.25}
                    maxPolarAngle={0.5 * Math.PI}
                    minPolarAngle={0}
                    maxZoom={width <= 600 ? 15 : 75}
                    minZoom={width <= 600 ? 10 : 25}
                    zoomSpeed={.5}
                />
            </Suspense>
            </Canvas>
            <Loader />
        </CanvasContainer>
    )
}

export default CanvasComponent
