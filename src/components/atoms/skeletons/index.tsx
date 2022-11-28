'use client';

import React from 'react';
import { default as BaseSkeleton, SkeletonProps } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Skeleton(props: SkeletonProps) {
  return <BaseSkeleton {...props} baseColor="rgba(255, 255, 255, 0.1)" />;
}

export default Skeleton;
