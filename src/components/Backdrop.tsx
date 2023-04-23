import React from "react";

// interface BackdropProps {
//   bg: string;
// }

const Backdrop = () => {
  return (
    <div
      className={`fixed inset-0 bg-black  opacity-80 z-40`}
      //   onClick={onClick}
    />
  );
};

export default Backdrop;
