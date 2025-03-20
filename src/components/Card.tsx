import React from "react";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="w-full max-w-3xl bg-white p-6 rounded-2xl shadow-lg text-center">
      {children}
    </div>
  );
};

export default Card;
