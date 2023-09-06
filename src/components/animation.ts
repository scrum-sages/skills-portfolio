import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface FadeInParams {
  parent: string;
  child: string;
}

export function fadeIn({ parent, child }: FadeInParams) {
  gsap.from(child, {
    y: -40, // Start position above the slide section
    opacity: 0, // Start with 0 opacity
    duration: 0.7,
    stagger: 0.4,
    ease: "power1.out",
    scrollTrigger: {
      trigger: parent,
      start: 'top 70%',
      end: 'top bottom',
      toggleActions: 'play none none reset',
    },
  });
}
export function slowFade({ parent, child }: FadeInParams) {
  gsap.from(child, {
    y: -60, // Start position above the slide section
    opacity: 0, // Start with 0 opacity
    duration: 1.2,
    ease: "power1.out",
    scrollTrigger: {
      trigger: parent,
      start: 'top 70%',
      end: 'top bottom',
      toggleActions: 'play none none reset',
    },
  });
}

export function scaleUp({ parent, child }: FadeInParams) {
  gsap.from(child, {
    y: -40, // Start position above the slide section
    opacity: 0, // Start with 0 opacity
    duration: 0.6,
    scale:0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: parent,
      start: 'top 70%',
      end: 'top bottom',
      toggleActions: 'play none none reset',
    },
  });
}

export function bounceIn({ parent, child }: FadeInParams) {
  gsap.from(child, {
    y: -10, // Start position above the slide section
    opacity: 0, // Start with 0 opacity
    duration: 0.6,
    stagger: 0.2,
    ease: 'elastic.out(1, 0.3)',
    scrollTrigger: {
      trigger: parent,
      start: 'top 70%',
      end: 'top bottom',
      toggleActions: 'play none none reset',
    },
  });
}