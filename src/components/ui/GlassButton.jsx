import React from 'react';

const GlassButton = ({ children, active, onClick, icon: Icon }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-md border ${
        active 
          ? 'bg-white/20 border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.2)] text-white' 
          : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
      }`}
    >
      {Icon && <Icon size={18} />}
      <span className="font-medium tracking-wide">{children}</span>
    </button>
  );
};

export default GlassButton;