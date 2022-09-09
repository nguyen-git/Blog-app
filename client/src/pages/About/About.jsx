import React from "react";
import "./about.scss";
import Header from "../../components/Header/Header.jsx";
import aboutbg from "../../../src/asset/img/aboutbg.jpg";
import sam from "../../../src/asset/img/sam.jpg";
import cottonbro from "../../../src/asset/img/cottonbro.jpg";
import Footer from "../../components/Footer/Footer.jsx";
import Accordion from "../../components/Accordion/Accordion";

const About = () => {
  return (
    <div className="about">
      <Header />
      <div className="aboutContainer">
        <div className="aboutBanner">
          <img src={aboutbg} alt="About" className="image" />
        </div>
        <div className="aboutContent">
          <section className="section">
            <div className="detail">
              <h3 className="detailTitle">
                Giới thiệu về -{" "}
                <span style={{ color: "rgb(141, 0, 0)" }}>Blog App</span>
              </h3>
              <p className="detailText">
                Blog App là một phương tiện truyền thông xã hội, chia sẻ trải
                nghiệm và kiến thức hữu ích dành cho cộng đồng.Blog App là một
                không gian online giúp bạn chia sẽ ý kiến, cách nhìn của bạn về
                một điều gì đó về cuộc sống hằng ngày. Bạn có thể tăng trưởng số
                lượng người xem và kiếm tiền, hoặc là tăng nhận biết của một sản
                phẩm nào đó, nếu bạn nghĩ mọi người cần biết về nó. Viết blog có
                thể chỉ là một sở thích, nhưng cũng có thể phát triển thành một
                nghề để sống. Sẽ rất khó để tưởng tượng thế giới sẽ như thế nào
                nếu không có blog, vì hầu hết mọi người đều thích đọc, để trải
                nghiệm những điều thú vị diễn ra trên khắp quả đất ở mọi khía
                cạnh phải không.
              </p>
            </div>
            <div className="detailImage">
              <img src={cottonbro} alt="cottonbro" />
            </div>
          </section>
          <section className="section">
            <div className="detailImage">
              <img src={sam} alt="sam" />
            </div>
            <div className="detail">
              <h3 className="detailTitle">
                Lịch sử hình thành -{" "}
                <span style={{ color: "rgb(141, 0, 0)" }}>Blog App</span>
              </h3>
              <p className="detailText">
                Là một trong những công ty hàng đầu về dịch vụ cộng đồng trên
                mạng xã hội Internet. <b>PN Company</b> đã tạo ra sản phẩm đột
                phá đưa người dùng mạng xã hội có thể thoải mái chia sẻ những
                kiến thức quan điểm kinh nghiệm về cái nhìn chủ quan của mình về
                một chủ đề nhất định. Mục tiêu vì lợi ích của người dùng mạng xã
                hội, chúng tôi luôn luôn học hỏi và không ngừng phát triển để
                bắt kịp xu thế và đem lại những giá trị to lớn cho cộng đồng
                Blog App.
              </p>
            </div>
          </section>
        </div>
      </div>
      <Accordion />
      <Footer />
    </div>
  );
};

export default About;
