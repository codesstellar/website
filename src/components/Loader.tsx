'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('');
  const fullText = 'CODESSTELLAR';

  useEffect(() => {
    let currentText = '';
    let i = 0;
    
    const textInterval = setInterval(() => {
      if (i < fullText.length) {
        currentText += fullText[i];
        setText(currentText);
        i++;
      } else {
        clearInterval(textInterval);
      }
    }, 50);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center"
      exit={{ clipPath: 'inset(0 0 100% 0)', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div className="flex flex-col items-center gap-8">
        <div className="flex items-center gap-4">
          <motion.img
            src="/assets/logo-icon.png"
            alt="Loading Icon"
            className="w-12 h-12 object-contain"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          <h1 className="text-2xl font-display font-bold tracking-widest text-text-primary h-8 flex items-center">
            {text}
            <motion.span 
              animate={{ opacity: [1, 0] }} 
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-2 h-5 bg-accent-primary ml-1 inline-block"
            />
          </h1>
        </div>
        
        <div className="w-64 h-1 bg-surface rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-accent-secondary to-accent-primary"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>
        
        <div className="text-xs font-mono text-text-secondary">
          INITIALIZING QUANTUM LATTICE... {progress}%
        </div>
      </div>
    </motion.div>
  );
}
