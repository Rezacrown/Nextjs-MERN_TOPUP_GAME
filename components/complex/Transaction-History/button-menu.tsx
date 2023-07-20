import React from "react";

interface btnprops {
    value: string;
    name: string;
    handleClick: () => void;
}


const buttonMenu = ({ value, name, handleClick }: btnprops) => {
  return (
    <button
      data-filter="*"
      className={`btn btn-status rounded-pill text-sm me-3`}
      name={name}
      value={value}
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

export default buttonMenu;
