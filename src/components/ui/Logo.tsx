import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <img 
        src="/img/logo.svg" 
        alt="Uplift Technologies Logo" 
        width={160}
        height={40}
        className="h-10 w-40"
        loading="eager"
        fetchpriority="high"
      />
    </div>
  );
};

export default Logo;