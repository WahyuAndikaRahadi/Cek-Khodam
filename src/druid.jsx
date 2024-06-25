import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export default function Druid(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/druid/model.gltf');
  const { actions } = useAnimations(animations, group);


  const playAnimation = (animationName) => {
    actions[animationName].reset().play();
  };

  React.useEffect(() => {
    if (props.animation === 'Processing') {
      playAnimation('PortalOpen');
    } else {
      playAnimation('Waiting');
    }


    return () => {
      if (props.animation === 'Processing') {
        actions['PortalOpen'].stop();
        playAnimation('Waiting');
      }
    };
  }, [props.animation]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={3.0}>
        <primitive object={nodes.root} />
        <skinnedMesh
          geometry={nodes.druid.geometry}
          material={materials.color_main}
          skeleton={nodes.druid.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/druid/model.gltf');
