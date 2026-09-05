'use client';

import { useEffect, useRef } from 'react';

const HOVER_SELECTOR = 'a, button, .bcard, .pcard, .tcard, .card-surface, [data-hover]';

export default function Cursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || reduced) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let ox = mx;
    let oy = my;
    let ix = mx;
    let iy = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    const onDown = () => document.body.classList.add('cur-click');
    const onUp = () => document.body.classList.remove('cur-click');
    const onOver = (e: MouseEvent) => {
      if ((e.target as Element)?.closest?.(HOVER_SELECTOR)) document.body.classList.add('cur-hover');
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element)?.closest?.(HOVER_SELECTOR)) document.body.classList.remove('cur-hover');
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    const loop = () => {
      ix += (mx - ix) * 0.28;
      iy += (my - iy) * 0.28;
      ox += (mx - ox) * 0.12;
      oy += (my - oy) * 0.12;
      if (innerRef.current) innerRef.current.style.transform = `translate(${ix}px,${iy}px) translate(-50%,-50%)`;
      if (outerRef.current) outerRef.current.style.transform = `translate(${ox}px,${oy}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="cursor" aria-hidden="true">
      <div ref={outerRef} className="cursor-outer" />
      <div ref={innerRef} className="cursor-inner" />
    </div>
  );
}
