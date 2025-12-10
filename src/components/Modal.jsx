import { cloneElement, createContext, useContext, useState } from "react";
import styled from "styled-components";
import { useClickOutside } from "../hooks/useClickOutside";

import { RiCloseLine } from "react-icons/ri";
import { createPortal } from "react-dom";

const StyledWindow = styled.div`
  @keyframes animateWindow {
    0% {
      transform: translate(-50%, -150%);
      opacity: 0;
    }
    100% {
      transform: translate(-50%, -50%);
      opacity: 1;
    }
  }
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  background-color: #fff;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem 4.6rem;
  border-radius: 4px;
  animation: animateWindow 0.4s;
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
`;
const Button = styled.div`
  background-color: transparent;
  color: #333;
  border: none;
  padding: 0.8rem;
  border-radius: 50%;
  transition: all 0.4s ease;
  position: absolute;
  top: 1rem;
  right: 1.2rem;
  cursor: pointer;
  & svg {
    font-size: 2.6rem;
  }
  &:hover {
    background-color: #eee;
  }
`;

const ModalContext = createContext();

function Modal({ children }) {
  const [openWindow, setOpenWindow] = useState("");

  const open = setOpenWindow;

  const close = () => setOpenWindow("");

  return (
    <ModalContext.Provider value={{ openWindow, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Window({ children, name }) {
  const { openWindow, close } = useContext(ModalContext);
  const ref = useClickOutside(close);

  if (openWindow !== name) return null;

  return createPortal(
    <Overlay>
      <StyledWindow ref={ref}>
        <Button onClick={() => close()}>
          <RiCloseLine />
        </Button>
        {cloneElement(children, { onCloseModal: close })}
      </StyledWindow>
    </Overlay>,
    document.body,
  );
}
function Open({ children, opens }) {
  const { open } = useContext(ModalContext);

  return <span>{cloneElement(children, { onClick: () => open(opens) })}</span>;
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
