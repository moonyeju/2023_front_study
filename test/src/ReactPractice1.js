import { useState } from "react";

function ReactPractice1() {
  const [num, setNum] = useState(0);
  const [message, setMessage] = useState("");
  const [txt, setTxt] = useState("");
  const [color, setColor] = useState("black");
  const enter = (e) => {
    if (e.key === "Enter") {
      alert("enter");
    }
  };
  const value = ["a", "b", "c", "d", "e"];
  const list = value.map((value) => <li>{value}</li>);

  return (
    <>
      <button onClick={() => setMessage("hi")}>입장</button>
      <button onClick={() => setMessage("bye")}>퇴장</button>

      <h1 style={{ color }}>{message}</h1>
      <button onClick={() => setColor("pink")} style={{ color: "pink" }}>
        pink
      </button>
      <button onClick={() => setColor("purple")} style={{ color: "purple" }}>
        purple
      </button>
      <br />

      <div>
        <button onClick={() => setNum(num + 1)}>좋아요</button> {num}
      </div>
      <div>
        <input onKeyPress={enter} onChange={(e) => setTxt(e.target.value)} />
        <button
          onClick={() => {
            alert(txt);
          }}
        >
          저장
        </button>
      </div>
      <ul>{list}</ul>
    </>
  );
}
export default ReactPractice1;
