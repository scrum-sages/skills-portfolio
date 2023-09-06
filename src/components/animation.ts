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
    stagger: 0.3,
    scrollTrigger: {
      trigger: parent,
      start: 'top 70%',
      end: 'top 40%',
      toggleActions: 'play none none reset',
    },
  });
}

export function scaleUp({ parent, child }: FadeInParams) {
  gsap.from(child, {
    y: -40, // Start position above the slide section
    opacity: 0, // Start with 0 opacity
    duration: 0.7,
    scale:0,
    rotate:10,
    stagger: 0.4,
    scrollTrigger: {
      trigger: parent,
      start: 'top 70%',
      end: 'top 40%',
      toggleActions: 'play none none reset',
    },
  });
}