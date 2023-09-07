import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface Props {
  navRefs: { [key: string]: React.RefObject<HTMLDivElement> };
}

export default function ScrollControl({ navRefs }: Props) {
  const { section } = useParams();

  useEffect(() => {
    if (!section) return;
    setTimeout(() => {
      const thisRef = navRefs[section].current;
      thisRef?.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  }, [section, navRefs]);
  return null;
}
