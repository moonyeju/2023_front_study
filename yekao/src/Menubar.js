import "./Header.css";
import { React, useState } from "react";

function Menubar() {
  const [isHovering, setIsHovering] = useState(0);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div className="menu">
      <div
        className={isHovering ? "hov" : "item"}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        카카오
      </div>
      <div
        className={isHovering ? "hov" : "item"}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        뉴진스
      </div>
      <div
        className={isHovering ? "hov" : "item"}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        기술과 서비스
      </div>
      <div
        className={isHovering ? "hov" : "item"}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        약속과 책임
      </div>
    </div>
  );
}
export default Menubar;
