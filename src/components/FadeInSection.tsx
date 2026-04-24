"use client";

import { useEffect, useRef, useState } from "react";

type FadeInSectionProps = {
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<"section">;

export default function FadeInSection({ children, className = "", ...props }: FadeInSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      {...props}
      className={`fade-in-up ${isVisible ? "is-visible" : ""} ${className}`.trim()}
    >
      {children}
    </section>
  );
}
