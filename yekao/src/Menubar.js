import "./Header.css";
import React, { useState } from "react";
import Menu1 from "./Menu1.js";

function Menubar() {
  const [isHovering, setIsHovering] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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
          setModalOpen(!modalOpen);
        }}
      >
        카카오
        {modalOpen ? <Menu1 /> : null}
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
      >
        기술과 서비스
      </li>
      <li
        className={isHovering ? "hov" : "item"}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        약속과 책임
      </li>
    </ul>
  );
}
export default Menubar;
