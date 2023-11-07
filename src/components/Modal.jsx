import { createPortal } from "react-dom";

const portalElement = document.getElementById("modal");

const Modal = ({ children }) => {
  return (
    <>
      {createPortal(
        <div className="fixed top-0 left-0 z-50 h-screen w-full   flex justify-center items-center">
          {children}
        </div>,
        portalElement
      )}
    </>
  );
};

export default Modal;
