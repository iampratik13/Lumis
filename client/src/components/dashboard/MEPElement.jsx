import React, { useRef } from 'react';
import { useHelper, Html } from '@react-three/drei';
import { BoxHelper } from 'three';

export const MEPElement = ({ element, displayMode }) => {
  const meshRef = useRef();
  const { id, type, system, revitPosition, is_clashing, clash_type, clearance, rerouted_offset, rotation } = element;
  const scaleDown = 100;
  
  const basePos = [
    revitPosition[0] / scaleDown,
    revitPosition[2] / scaleDown, 
    -revitPosition[1] / scaleDown 
  ];
  
  const colors = {
    ColdWater: '#2196F3',
    HotWater: '#F44336',
    SupplyAir: '#B0BEC5',
    Structure: '#4f5a73',
    ReturnAir: '#B0BEC5',
    Electrical: '#FFC107'
  };
  const color = colors[system] || '#ffffff';
  
  const showClash = is_clashing && displayMode === 'original';
  
  // AABB Bounding Box Helper
  useHelper(showClash && clash_type === 'hard' ? meshRef : null, BoxHelper, 'red');

  let opacity = 1.0;
  if (displayMode === 'rerouted' && rerouted_offset) {
    opacity = 0.3; // Ghost mode
  }
  
  return (
    <group>
      <mesh ref={meshRef} position={basePos} rotation={rotation}>
        {type === 'pipe' ? (
          <cylinderGeometry args={[element.diameter/scaleDown/2, element.diameter/scaleDown/2, element.length/scaleDown, 32]} />
        ) : (
          <boxGeometry args={[element.width/scaleDown, element.height/scaleDown, element.length/scaleDown]} />
        )}
        <meshPhysicalMaterial 
          color={color} 
          transparent={true} 
          opacity={opacity} 
          roughness={0.2} 
          metalness={0.8} 
          transmission={opacity === 1.0 ? 0.3 : 0.8} 
          thickness={0.5} 
        />
        
        {/* Soft Clash Sphere Overlay */}
        {showClash && clash_type === 'soft' && clearance && (
          <mesh>
            <sphereGeometry args={[clearance/scaleDown, 32, 32]} />
            <meshBasicMaterial color="#f97316" transparent opacity={0.3} wireframe />
          </mesh>
        )}
        
        <Html center distanceFactor={150}>
          <div 
            className={`px-2 py-1 bg-surface-container/90 backdrop-blur rounded border border-outline-variant text-[10px] text-white whitespace-nowrap cursor-pointer hover:bg-slate-800 transition-colors pointer-events-auto ${displayMode === 'rerouted' && rerouted_offset ? 'opacity-30' : ''}`} 
            onClick={() => alert(`System Data:\nID: ${id}\nType: ${type}\nSystem: ${system}`)}
          >
            {id}
          </div>
        </Html>
      </mesh>

      {/* Rerouted Green Path Overlay */}
      {displayMode === 'rerouted' && rerouted_offset && (
        <mesh 
          position={[
            (revitPosition[0] + rerouted_offset[0]) / scaleDown,
            (revitPosition[2] + rerouted_offset[2]) / scaleDown,
            -(revitPosition[1] + rerouted_offset[1]) / scaleDown
          ]} 
          rotation={rotation}
        >
          {type === 'pipe' ? (
            <cylinderGeometry args={[element.diameter/scaleDown/2, element.diameter/scaleDown/2, element.length/scaleDown, 32]} />
          ) : (
            <boxGeometry args={[element.width/scaleDown, element.height/scaleDown, element.length/scaleDown]} />
          )}
          <meshPhysicalMaterial 
            color="#10b981" 
            emissive="#10b981"
            emissiveIntensity={0.4}
            transparent={true} 
            opacity={0.85} 
            roughness={0.1} 
            metalness={0.8} 
          />
          <Html center distanceFactor={150} position={[0, (element.diameter || element.height)/scaleDown/2 + 2, 0]}>
            <div className="px-2 py-1 bg-emerald-900/80 backdrop-blur rounded border border-emerald-500 text-[10px] text-emerald-300 whitespace-nowrap">
              [AI REROUTED]
            </div>
          </Html>
        </mesh>
      )}
    </group>
  );
};
