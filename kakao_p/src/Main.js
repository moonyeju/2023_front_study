import React from "react";
import "./Main.css";
import calculate from "./images/cal.png";
import c1pic from "./images/sample.png";
import c3pic from "./images/pic.png";
import { AiFillFund } from "react-icons/ai";
import { AiOutlineMore } from "react-icons/ai";
import { GrLineChart } from "react-icons/gr";
import { FcLike } from "react-icons/fc";

function Main() {
  const now = new Date();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  let todayYear = now.getFullYear();
  let dayOfWeek = week[now.getDay()];
  let todayMonth = now.getMonth() + 1;
  let todayDate = now.getDate();
  let hours = now.getHours() % 12 ? now.getHours() % 12 : 12;
  let minutes =
    now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
  let ampm = now.getHours() >= 12 ? "PM" : "AM";

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
          <div className="c">
            <div className="pad">
              <div className="r">
                <div>
                  <AiFillFund size={40} />
                </div>

                <div className="balloon">히스토리</div>
                <button className="dot">
                  <AiOutlineMore size={25} />
                </button>
              </div>
              <div className="txt">인공지능이 그린 그림은 창작물일까?</div>
              <div className="tag">
                #Karlo #generative AI #멀티모달AI #카카오브레인
              </div>
            </div>
            <img className="image2" src={c1pic} />
          </div>
        </div>
        <div className="c">
          <div className="container2">
            <div className="c">
              <div className="r">
                <div className="chart">
                  <GrLineChart size={25} />
                </div>
                <div className="balloon">주가정보</div>
              </div>
              <div className="r">
                <div className="mo">64,700</div>
                <div className="up">▲1000</div>
              </div>
              <div className="day">
                {todayYear}.{todayMonth}.{todayDate} {hours}:{minutes}
                {ampm}
              </div>
            </div>
          </div>
          <div className="container2">
            <div className="c">
              <div className="r">
                <div className="chart">
                  <FcLike size={30} />
                </div>
                <div className="balloon">약속과 책임</div>
              </div>
              <div className="txt2">
                카카오는 당신과 함께 더 나은
                <br />
                세상을 만듭니다.
              </div>
              <div className="day">#약속과책임 #esg #소셜임팩트</div>
            </div>
          </div>
          <div className="container2">
            <div className="c">
              <div className="r">
                <div className="chart">
                  <FcLike size={30} />
                </div>
                <div className="balloon">약속과 책임</div>
              </div>
              <div className="txt2">
                ESG보고서,
                <br />
                카카오의 약속과 책임
              </div>
              <div className="day">#2021년 성과 #ESG보고서</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container3">
        <div className="c">
          <div className="txt3">기술과 사람으로 더 나은 세상을 만듭니다.</div>
          <button className="btn">카카오문화 바로가기 →</button>
          <img className="image3" src={c3pic} />
        </div>
      </div>
    </div>
  );
}

export default Main;
