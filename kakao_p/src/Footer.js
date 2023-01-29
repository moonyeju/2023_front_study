import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <footer>
        <div className="row">
          <div className="col">
            <li className="tit">카카오</li>
            <div className="list">카카오 문화</div>
            <div className="list">공동체</div>
          </div>
          <div className="col">
            <li className="tit">뉴스</li>
          </div>
          <div className="col">
            <li className="tit">기술과 서비스</li>
            <div className="list">기술</div>
            <div className="list">서비스</div>
          </div>
          <div className="col">
            <li className="tit">약속과 책임</li>
            <div className="list">ESG</div>
            <div className="list">소셜임팩트</div>
          </div>
          <div className="col">
            <li className="tit">투자정보</li>
            <div className="list">기업지배구조</div>
            <div className="list">주가정보</div>
          </div>
          <div className="col">
            <li className="tit">고객센터</li>
            <div className="list">기업지배구조</div>
            <div className="list">주가정보</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
