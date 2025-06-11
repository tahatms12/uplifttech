import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <img 
        src="https://24vzlu2kzs.ufs.sh/f/4JlBnp1v6U48yI3pZSh5Jv7ormPLVldGMtnpXT9sKcCk0RUO" 
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