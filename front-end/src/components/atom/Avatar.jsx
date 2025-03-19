import React from "react";

const Avatar = ({ name }) => {
  const getInitial = (name) => name?.charAt(0).toUpperCase() || "?";

  return (
    <div className="h-8 w-8 flex items-center justify-center rounded-full bg-blue-700 text-white font-medium text-sm">
      {getInitial(name)}
    </div>
  );
};

export default Avatar;
