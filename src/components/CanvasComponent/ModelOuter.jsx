import { useGLTF } from '@react-three/drei';
import React from 'react'

const ModelOuter = () => {
    const gltf =  useGLTF("/Models/outer.glb");

    return (
        <primitive object={gltf.scene} dispose={null} />
    )
}

export default ModelOuter
