import React from 'react';
import { motion } from 'framer-motion';

const LiquidBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-slate-50">
      {/* Cairan 1: Biru Muda (Menyesuaikan warna almamater Anda) */}
      <motion.div
        animate={{ x: [0, 100, -50, 0], y: [0, -100, 50, 0], scale: [1, 1.2, 0.8, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[10%] w-[45vw] h-[45vw] rounded-full bg-blue-200/60 blur-[100px]"
      />
      
      {/* Cairan 2: Pink/Ungu Pastel */}
      <motion.div
        animate={{ x: [0, -150, 100, 0], y: [0, 150, -100, 0], scale: [1, 1.1, 0.9, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[30%] right-[-5%] w-[50vw] h-[50vw] rounded-full bg-fuchsia-200/50 blur-[120px]"
      />

      {/* Cairan 3: Cyan Halus */}
      <motion.div
        animate={{ x: [0, 100, -100, 0], y: [0, 50, 150, 0], scale: [1, 1.3, 0.8, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute bottom-[-10%] left-[20%] w-[55vw] h-[55vw] rounded-full bg-cyan-200/50 blur-[100px]"
      />
    </div>
  );
};

export default LiquidBackground;