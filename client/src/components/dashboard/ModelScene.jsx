import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid } from '@react-three/drei';
import { MEPElement } from './MEPElement';
import { mepElements } from '../../data/mepElements';

const ModelScene = ({ displayMode }) => {
  return (
    <Canvas 
      camera={{ position: [160, 80, -100], fov: 45 }} 
      className="w-full h-full bg-[#04060b] rounded-xl"
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[100, 100, 50]} intensity={1} castShadow />
      <directionalLight position={[-100, -100, -50]} intensity={0.5} />
      
      <fog attach="fog" args={['#04060b', 100, 500]} />
      
      <Grid 
        position={[140, 0, -100]} 
        args={[500, 500]} 
        cellSize={10} 
        cellThickness={0.8} 
        cellColor="#323a4d" 
        sectionSize={50} 
        sectionThickness={1.5} 
        sectionColor="#4f5a73" 
        fadeDistance={400} 
      />

      {mepElements.map(element => (
        <MEPElement key={element.id} element={element} displayMode={displayMode} />
      ))}
      
      <OrbitControls makeDefault minDistance={10} maxDistance={400} target={[160, 30, -50]} />
    </Canvas>
  );
};

export default ModelScene;
