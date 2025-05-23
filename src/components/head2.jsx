/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 ./public/models/head2/model.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Head2(props) {
  const { nodes, materials } = useGLTF('/models/head2/model.glb ')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.texture_pbr_v128001.geometry} material={materials['Material.002']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.texture_pbr_v128002.geometry} material={materials['Material.001']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.texture_pbr_v128003.geometry} material={materials['Material.003']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.model.geometry} material={materials.CustomMaterial} position={[0.405, -0.611, 0.013]} rotation={[1.456, 0.45, 0.561]} />
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} />
    </group>
  )
}

useGLTF.preload('/models/head2/model.glb ')
