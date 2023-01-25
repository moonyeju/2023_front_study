import "./Header.css";
import React, { useState } from "react";
import Menu1 from "./Menu1.js";
import Menu2 from "./Menu2.js";
import Menu3 from "./Menu3.js";

function Menubar() {
  const [isHovering, setIsHovering] = useState(false);
  const [modalOpen1, setModalOpen1] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <ul className="menu">
      <li
        className={isHovering ? "hov" : "item"}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={() => {
          setModalOpen1(!modalOpen1);
        }}
      >
        카카오
        {modalOpen1 ? <Menu1 /> : null}
      </li>

      <li
        className={isHovering ? "hov" : "item"}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        뉴진스
      </li>
      <li
        className={isHovering ? "hov" : "item"}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={() => {
          setModalOpen2(!modalOpen2);
        }}
      >
        기술과 서비스
        {modalOpen2 ? <Menu2 /> : null}
      </li>
      <li
        className={isHovering ? "hov" : "item"}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={() => {
          setModalOpen3(!modalOpen3);
        }}
      >
        약속과 책임
        {modalOpen3 ? <Menu3 /> : null}
      </li>
    </ul>
  );
}
export default Menubar;
