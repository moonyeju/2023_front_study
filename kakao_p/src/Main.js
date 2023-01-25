import React from "react";
import "./Main.css";
import calculate from "./images/cal.png";

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
        <h2>오늘의 카카오</h2>
      </div>
      <h2 className="word2">
        {todayMonth}월 {todayDate}일 {dayOfWeek}요일 소식
      </h2>
    </div>
  );
}

export default Main;
