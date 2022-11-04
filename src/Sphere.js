import React from 'react';
function Sphere() {
  return (
    <mesh>
      <sphereBufferGeometry attach="geometry" args={[2, 32]} />
    </mesh>
  );
}

export default Sphere;
