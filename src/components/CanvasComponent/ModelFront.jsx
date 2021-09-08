import React from 'react'
import { useGLTF } from '@react-three/drei';

const ModelFront = () => {
    const gltf =  useGLTF("/Models/piekarnik3d.glb");

    return (
        <primitive object={gltf.scene} dispose={null} />            
    )
}

export default ModelFront
