import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export default function KorriganRight(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/korrigan-hat/model.gltf');
  const { actions } = useAnimations(animations, group);

  // Function to start the pose_chapeau animation
  const playPoseChapeau = () => {
    actions['pose_chapeau'].reset().play();
  };

  // Start animation when component mounts
  useEffect(() => {
    playPoseChapeau();
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={2.8} rotation={[0, 0.01, 0]}>
        <primitive object={nodes.root} />
        <skinnedMesh
          geometry={nodes.Chapeau.geometry}
          material={materials['color_main.014']}
          skeleton={nodes.Chapeau.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/korrigan-hat/model.gltf');
