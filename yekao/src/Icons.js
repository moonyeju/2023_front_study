import React, { useState } from "react";
import { ReactComponent as Search } from "./images/search.svg";
import { ReactComponent as English } from "./images/english.svg";
import { ReactComponent as Dark } from "./images/dark.svg";

function Icons() {
  return (
    <div className="icon">
      <button>
        <Search className="search" />
      </button>
      <button>
        <English className="english" />
      </button>
      <button>
        <Dark className="dark" />
      </button>
    </div>
  );
}
export default Icons;
