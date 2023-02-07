import "./Header.css";
import React, { useState, useRef, useEffect } from "react";
import Menu1 from "./Menu1.js";
import Menu2 from "./Menu2.js";
import Menu3 from "./Menu3.js";

function Menubar() {
  const [isHovering, setIsHovering] = useState(false);
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);
  const outside = useRef();
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  const modalCloseHandler = ({ target }) => {
    if (
      (modalOpen1 || modalOpen2 || modalOpen3) &&
      !outside.current.contains(target)
    ) {
      setModalOpen1(false);
      setModalOpen2(false);
      setModalOpen3(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", modalCloseHandler);
    return () => {
      window.removeEventListener("click", modalCloseHandler);
    };
  });

  return (
    <ul className="menu">
      <li>
        <button
          className={isHovering ? "hov" : "item"}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={() => {
            if (modalOpen1 == true) {
              setModalOpen1(false);
            } else {
              setModalOpen1(true);
            }
          }}
        >
          카카오
        </button>
        {modalOpen1 && <Menu1 ref={outside}></Menu1>}
      </li>

      <li>
        <button
          className={isHovering ? "hov" : "item"}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          뉴진스
        </button>
      </li>
      <li>
        <button
          className={isHovering ? "hov" : "item"}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={() => {
            if (modalOpen2 == true) {
              setModalOpen2(false);
            } else {
              setModalOpen2(true);
            }
          }}
        >
          기술과 서비스
        </button>
        {modalOpen2 && <Menu2 ref={outside}></Menu2>}
      </li>
      <li>
        <button
          className={isHovering ? "hov" : "item"}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={() => {
            if (modalOpen3 == true) {
              setModalOpen3(false);
            } else {
              setModalOpen3(true);
            }
          }}
        >
          약속과 책임
        </button>
        {modalOpen3 && <Menu3 ref={outside}></Menu3>}
      </li>
    </ul>
  );
}
export default Menubar;
