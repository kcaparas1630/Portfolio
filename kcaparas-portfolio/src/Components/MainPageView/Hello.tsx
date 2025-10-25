import { FC, useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HelloView, HelloContainer, HelloHeader } from './Styled-components/Hello';

interface WordProps {
  word: string;
  index: number;
  totalWords: number;
  progress: number;
}

const Word: FC<WordProps> = ({ word, index, totalWords, progress }) => {
  // Map thresholds to 0-0.7 range so all words complete earlier in the scroll
  const wordThreshold = (index / (totalWords - 1)) * 0.7;
  const isActive = progress >= wordThreshold;
  const color = isActive ? '#e68369' : 'rgba(46, 84, 209, 0.3)';

  return (
    <motion.span
      style={{ display: 'inline-block', marginRight: '0.2em' }}
      animate={{ color }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
    >
      {word}
    </motion.span>
  );
};

const HelloSection: FC = () => {
  const [progress, setProgress] = useState(0);
  const { ref, entry } = useInView({
    threshold: Array.from({ length: 101 }, (_, i) => i / 100),
    triggerOnce: false,
  });

  useEffect(() => {
    if (entry) {
      const rect = entry.boundingClientRect;
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      const elementHeight = rect.height;

      // Calculate how much of the section has been scrolled through
      // Progress: 0 when section top enters viewport bottom, 1 when section bottom exits viewport top
      const scrollStart = windowHeight; // Section top at viewport bottom
      const scrollEnd = -elementHeight; // Section bottom at viewport top
      const totalScrollDistance = scrollStart - scrollEnd; // Total distance to scroll through

      const currentProgress = (scrollStart - elementTop) / totalScrollDistance;
      const scrollProgress = Math.min(1, Math.max(0, currentProgress));

      setProgress(scrollProgress);
    }
  }, [entry]);

  const text = "👋 Pleased to meet ya, I'm a software developer based in Victoria, Canada. I enjoy building everything across the full stack, but what I'm most passionate about is creating something.";
  const words = useMemo(() => text.split(' '), []);

  return (
    <HelloView ref={ref}>
      <HelloContainer>
        <HelloHeader>
          {words.map((word, index) => (
            <Word
              // eslint-disable-next-line react/no-array-index-key
              key={`word-${word}-at-position-${index}`}
              word={word}
              index={index}
              totalWords={words.length}
              progress={progress}
            />
          ))}
        </HelloHeader>
      </HelloContainer>
    </HelloView>
  );
};

export default HelloSection;
