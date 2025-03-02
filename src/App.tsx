import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Room } from './components/Room';
import { Desk } from './components/Desk';
import { Computer } from './components/Computer';
import { Easel } from './components/Easel';
import { Plant } from './components/Plant';
import { Rug } from './components/Rug';
import { ArtSupplies } from './components/ArtSupplies';
import { Frame } from './components/Frame';

function App() {
  const [cameraPosition, setCameraPosition] = useState([0, 1.5, 5]);
  
  return (
    <div className="w-full h-screen">
      <Canvas shadows camera={{ position: cameraPosition, fov: 50 }}>
        <color attach="background" args={["#f8a5b8"]} /> {/* Brighter pink background */}
        <ambientLight intensity={0.7} />
        <pointLight position={[2, 3, 4]} intensity={1} castShadow />
        
        <Room />
        <Desk position={[0, 0, 0]} />
        <Computer position={[0, 0.81, 0]} />
        <Easel position={[-1.2, 0, 0.3]} />
        <Plant position={[1.5, 0.81, 0.3]} />
        <Rug position={[0, 0.01, 1]} />
        <ArtSupplies position={[-0.8, 0.81, 0]} />
        <Frame position={[-1.8, 1.5, -1.9]} />
        <Frame position={[0.5, 1.5, -1.9]} image="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=500" />
        
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2}
          minDistance={3}
          maxDistance={8}
        />
        <Environment preset="apartment" />
      </Canvas>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <button 
          onClick={() => setCameraPosition([0, 1.5, 5])}
          className="bg-white bg-opacity-70 hover:bg-opacity-100 text-gray-800 font-semibold py-2 px-4 rounded shadow"
        >
          Front View
        </button>
        <button 
          onClick={() => setCameraPosition([3, 2, 3])}
          className="bg-white bg-opacity-70 hover:bg-opacity-100 text-gray-800 font-semibold py-2 px-4 rounded shadow"
        >
          Side View
        </button>
        <button 
          onClick={() => setCameraPosition([0, 3, 2])}
          className="bg-white bg-opacity-70 hover:bg-opacity-100 text-gray-800 font-semibold py-2 px-4 rounded shadow"
        >
          Top View
        </button>
      </div>
    </div>
  );
}

export default App;