import React from 'react';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className='bg-[#FCD535] text-black rounded-md px-4 py-2'>
      {text}
    </button>
  );
};

export default Button;



