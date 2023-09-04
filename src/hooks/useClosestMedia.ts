import { useEffect, useState } from 'react';

interface Size {
  name: string;
  width: number;
}

const sizes: Size[] = [
  // { name: 'xs', width: 480 },
  { name: 'sm', width: 640 },
  { name: 'md', width: 768 },
  { name: 'lg', width: 1024 },
];

const findClosest = () => {
  return sizes.find(breakpoint => breakpoint.width > window.innerWidth)?.name || 'lg';
};

export default function useClosestMedia(): string {
  const [closest, setClosest] = useState<string>(findClosest());

  useEffect(() => {
    const handler = () => {
      setClosest(findClosest());
    };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  });

  return closest;
}
