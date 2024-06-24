  
import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export default function KorigganLeft(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/young-korrigan/model.gltf');
  const { actions } = useAnimations(animations, group);

  // Fungsi untuk memulai animasi pose_jeune
  const playPoseJeune = () => {
    actions['pose_jeune'].reset().play();
  };

  // Contoh memulai animasi saat komponen dimuat
  React.useEffect(() => {
    playPoseJeune(); 
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-2, 0, 0]} rotation={[0, 0.03, 0]} scale={0.5}>
        <primitive object={nodes.root} />
        <skinnedMesh
          geometry={nodes.Jeune.geometry}
          material={materials['color_main.003']}
          skeleton={nodes.Jeune.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/young-korrigan/model.gltf');

