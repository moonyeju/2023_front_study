import React from "react";
import "./Main.css";
import calculate from "./images/cal.png";
import { AiFillFund } from "react-icons/ai";

function Main() {
  const now = new Date();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  let dayOfWeek = week[now.getDay()];
  let todayMonth = now.getMonth() + 1;
  let todayDate = now.getDate();
  return (
    <div className="main">
      <div className="word1">
        <img className="image" src={calculate} />
        <h1>오늘의 카카오</h1>
      </div>
      <div className="word2">
        <h1>
          {todayMonth}월 {todayDate}일 {dayOfWeek}요일 소식입니다
        </h1>
      </div>
      <div className="r">
        <div className="container1">
          <div className="r">
            <div>
              <AiFillFund size={40} />
            </div>

            <div className="balloon">히스토리</div>
          </div>
          <h1>인공지능이 그린 그림은 창작물일까?</h1>
        </div>
        <div className="c">
          <div className="container2">
            <div className="balloon">주가정보</div>
          </div>
          <div className="container2">
            <div className="balloon">주가정보</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
