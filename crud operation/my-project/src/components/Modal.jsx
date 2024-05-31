import React from "react";
import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
        <div className="relative p-3 z-50 m-auto min-h-[300px] max-w-[370px] bg-white">
          <div className="flex justify-end p-3">
            <AiOutlineClose
              onClick={onClose}
              className="text-2xl cursor-pointer"
            />
          </div>
          {children}
          </div>

        <div onClick={onClose} className="absolute z-40 top-0 h-screen w-screen backdrop-blur"></div>

          </>
      )}
     
    </>,
    document.getElementById("model-root")
  );
};

export default Modal;
