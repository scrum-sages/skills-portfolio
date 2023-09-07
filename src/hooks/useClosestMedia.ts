import { useEffect, useState } from 'react';

interface Size {
  name: string;
  width: number;
}

const sizes: Size[] = [
  { name: 'lg', width: 1024 },
  { name: 'md', width: 624 },
];

const findClosest = () => {
  return sizes.find(breakpoint => breakpoint.width < window.innerWidth)?.name || 'sm';
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
