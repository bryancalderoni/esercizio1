import React from "react";

interface ButtonFormProp {
  onClick?: () => void;
  disable?: boolean;
}

const ButtonForm: React.FC<ButtonFormProp> = ({ onClick, disable = false }) => {
  return <button onClick={onClick} disabled={disable}></button>;
};

export default ButtonForm;
