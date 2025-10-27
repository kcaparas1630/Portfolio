import { FC, useMemo, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HelloView, HelloContainer, HelloHeader } from './Styled-components/Hello';

gsap.registerPlugin(ScrollTrigger);

interface WordProps {
  word: string;
  index: number;
}

const Word: FC<WordProps> = ({ word, index }) => (
  <span
    className={`word-${index}`}
    style={{ display: 'inline-block', marginRight: '0.2em', color: 'rgba(46, 84, 209, 0.3)' }}
  >
    {word}
  </span>
);

const HelloSection: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);

  const textSegments = useMemo(() => {
    const beforeLocation = "👋 Pleased to meet ya, I'm a software developer based in";
    const location = 'Victoria, Canada';
    const afterLocation = "I enjoy building everything across the full stack, but what I'm most passionate about is creating something";
    const impactful = 'impactful';
    const userFacing = 'user-facing';

    const beforeWords = beforeLocation.split(' ');
    const afterWords = afterLocation.split(' ');

    return {
      beforeWords,
      location,
      afterWords,
      impactful,
      userFacing,
      totalWords: beforeWords.length + 1 + afterWords.length + 2,
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return undefined;

    const ctx = gsap.context(() => {
      // Scale animation for HelloHeader
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { scale: 1 },
          {
            scale: 0.7,
            rotateZ: 3,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        );
      }

      // Color animation for each word
      const animateWord = (className: string, wordIndex: number, totalWords: number) => {
        const wordElement = containerRef.current?.querySelector(`.${className}`);
        if (!wordElement) return;

        const startProgress = (wordIndex / (totalWords - 1)) * 0.7;
        const endProgress = Math.min(startProgress + 0.15, 0.7);

        gsap.fromTo(
          wordElement,
          { color: 'rgba(46, 84, 209, 0.3)' },
          {
            color: '#e68369',
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
              onUpdate: ({ progress }) => {
                if (progress >= startProgress && progress <= endProgress) {
                  const localProgress = (progress - startProgress) / (endProgress - startProgress);
                  gsap.set(wordElement, {
                    color: gsap.utils.interpolate(
                      'rgba(46, 84, 209, 0.3)',
                      '#e68369',
                      localProgress,
                    ),
                  });
                } else if (progress > endProgress) {
                  gsap.set(wordElement, { color: '#e68369' });
                } else {
                  gsap.set(wordElement, { color: 'rgba(46, 84, 209, 0.3)' });
                }
              },
            },
          },
        );
      };

      let currentIndex = 0;

      // Animate before words
      textSegments.beforeWords.forEach(() => {
        animateWord(`word-${currentIndex}`, currentIndex, textSegments.totalWords);
        currentIndex += 1;
      });

      // Animate location with reveal effect
      const locationElement = containerRef.current?.querySelector('.location');
      if (locationElement) {
        gsap.fromTo(
          locationElement,
          { clipPath: 'inset(0 100% 0 0)' },
          {
            clipPath: 'inset(0 0% 0 0)',
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: locationElement,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          },
        );
      }
      currentIndex += 1;

      // Animate after words
      textSegments.afterWords.forEach(() => {
        animateWord(`word-${currentIndex}`, currentIndex, textSegments.totalWords);
        currentIndex += 1;
      });

      // Animate special words with reveal effect when "something" is almost filled
      const impactfulElement = containerRef.current?.querySelector('.impactful');
      const userFacingElement = containerRef.current?.querySelector('.user-facing');
      const ampersandElement = containerRef.current?.querySelector('.ampersand');

      if (impactfulElement && userFacingElement && ampersandElement) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: impactfulElement,
            start: 'top bottom',
            toggleActions: 'play none none none',
          },
        });

        tl.fromTo(
          [impactfulElement, userFacingElement, ampersandElement],
          { clipPath: 'inset(0 100% 0 0)' },
          {
            clipPath: 'inset(0 0% 0 0)',
            duration: 1.5,
            ease: 'power2.out',
          },
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [textSegments]);

  return (
    <HelloView ref={containerRef}>
      <HelloContainer>
        <HelloHeader ref={headerRef}>
          {textSegments.beforeWords.map((word, index) => (
            <Word
              // eslint-disable-next-line react/no-array-index-key
              key={`word-${index}`}
              word={word}
              index={index}
            />
          ))}
          <br />
          <span
            className="location"
            style={{
              display: 'inline-block',
              padding: '0.2em 0.5em',
              rotate: '3deg',
              backgroundColor: 'transparent',
              color: '#fbf6e2',
              border: '3px solid #fbf6e2',
              marginRight: '0.2em',
            }}
          >
            {textSegments.location}
          </span>
          <br />
          {textSegments.afterWords.map((word, index) => {
            const globalIndex = textSegments.beforeWords.length + 1 + index;
            return (
              <Word
                // eslint-disable-next-line react/no-array-index-key
                key={`word-${globalIndex}`}
                word={word}
                index={globalIndex}
              />
            );
          })}
          {' '}
          <div className="group-words" style={{ display: 'inline-block', position: 'relative', bottom: 0, width: '450px', height: '270px', verticalAlign: 'middle' }}>
            <span
              className="impactful"
              style={{
                position: 'absolute',
                top: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                padding: '0.3em 0.6em',
                backgroundColor: 'transparent',
                color: '#fbf6e2',
                border: '3px solid #fbf6e2',
                whiteSpace: 'nowrap',
                fontSize: '0.9em',
              }}
            >
              {textSegments.impactful}
            </span>
            <span className="ampersand" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '1.3em', fontWeight: 'bold', lineHeight: '1', zIndex: 10, color: '#fbf6e2' }}>&</span>
            <span
              className="user-facing"
              style={{
                position: 'absolute',
                bottom: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                padding: '0.3em 0.6em',
                backgroundColor: 'transparent',
                color: '#fbf6e2',
                border: '3px solid #fbf6e2',
                whiteSpace: 'nowrap',
                fontSize: '0.9em',
              }}
            >
              {textSegments.userFacing}
            </span>
          </div>
        </HelloHeader>
      </HelloContainer>
    </HelloView>
  );
};

export default HelloSection;
