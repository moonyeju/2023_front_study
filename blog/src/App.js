/*eslint-disable*/ //warning잡아줌

import React, { useState } from "react";
import "./App.css";

function App() {
  let [글제목, 글제목변경] = useState([
    "여자옷 추천",
    "가방 추천",
    "모자 추천",
  ]);
  // let [글제목1, 글제목변경1] = useState("가방 추천");
  // let [글제목2, 글제목변경2] = useState("모자 추천");
  //state에 데이터 저장해놓는 이유?
  // 1.웹이 app처럼 동작하게 만들고 싶어서
  // 2. state로 변경되면 html이 자동으로 재렌더링됨 html새로고침없이 스무스
  let posts = "블로그 글"; //거의 바뀌지 않아서 state에 저장할 필요 x
  let pic = "ys.jpg";
  let [like, setlike] = useState(0);
  let [like2, setlike2] = useState(0);
  // let [like2, setlike2] = useState(0);
  // let log = { color: "yellow", background: "green" };
  function a() {
    return "log";
  }
  function increase() {
    return setlike(like + 1);
  }

  function titleboy() {
    //state는 직접 건들지 말자 변경함수 쓰기
    // var newArray=글제목; <-이건 그냥 값 공유
    var newArray = [...글제목]; //deep copy
    newArray[0] = "남자옷 추천";
    글제목변경(newArray);
  }
  function titlegirl() {
    //state는 직접 건들지 말자 변경함수 쓰기
    // var newArray=글제목; <-이건 그냥 값 공유
    var newArray = [...글제목]; //deep copy
    newArray[0] = "여자옷 추천";
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={{ color: "pink" }}>개발 blog</div>
      </div>
      <button
        className="sort"
        onClick={() => {
          var newArray = [...글제목]; //deep copy
          newArray.sort();
          글제목변경(newArray);
        }}
      >
        정렬
      </button>
      {/* <div className="list">
        <h3>{글제목}</h3>
        <p>2/17</p>
        <hr /> <- 줄하나 그음!
      </div> */}
      <div className="list">
        <h3>
          {글제목[0]}
          <span className="like" onClick={increase}>
            ♥{like}
          </span>
          <button
            onClick={() => {
              if (글제목[0] === "여자옷 추천") {
                titleboy();
              } else titlegirl();
            }}
            className="change"
          >
            제목 변경
          </button>
        </h3>
        <p>1/10</p>
        <hr />
      </div>
      <div className="list">
        <h3>
          {글제목[1]}
          <span
            className="like"
            onClick={() => {
              setlike2(like2 + 1);
            }}
          >
            ♥{like2}
          </span>
        </h3>
        <p>1/11</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[2]}</h3>
        <p>1/12</p>
        <hr />
      </div>
      <Modal title={[...글제목]}></Modal>
      {/* <div className="list">
        <h3>{글제목1}</h3>
        <p>1/9</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목2}</h3>
        <p>1/1</p>
        <hr />
      </div> */}
      {/* <h4 style={log}>{posts}</h4> */}
      {/* <h5>{a()}</h5> */}
      {/* <img src={pic} /> */}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.title[2]}</h2>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
  );
}
//Component 유의사항
//1. 이름은 대문자
//2. return 안에 있는건 태그 하나로 묶어줘야 함
//-> 의미없는 div쓰기 싫으면? <></>로 묶어줌
//function App와 동일한 위치에 만들어주면 됨
//html을 한 단어로 축약해서 사용가능 리액트를 사용하는 큰 이유
//Component는 관리가 편함
//반복출현하는 html덩어리들, 자주 변경되는 html ui들, 다른 페이지 만들때도 -> Component로 만들면 좋음
//단점 -> state쓸 때 복잡
export default App;
