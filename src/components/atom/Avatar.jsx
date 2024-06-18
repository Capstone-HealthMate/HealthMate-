import React from 'react';

const Avatar = ({ name }) => {
  const getInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : '';
  };

  return (
    <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full">
      {getInitial(name)}
    </div>
  );
};

export default Avatar;
