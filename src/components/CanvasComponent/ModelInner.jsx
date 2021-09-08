import { useGLTF } from '@react-three/drei';
import React from 'react'

const ModelInner = () => {
    const gltf =  useGLTF("/Models/ovenPoly.glb");

    return (
        <mesh object={gltf.scene} dispose={null} />
    )
}

export default ModelInner
