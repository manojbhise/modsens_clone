import React, { useContext, useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import styled from "styled-components";
import axios from "axios";
import { AppContext } from "../Context/AppProvider";

const MainDiv = styled.div`
  width: 100%;
  margin-top: 5px;
`;
const BannerDiv = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;
const DivLeft = styled.div``;
const DivMiddle = styled.div``;
const DivRight = styled.div``;
const OnImgDiv = styled.div`
  display: ${(props) => (props.title === "" ? "none" : "grid")};
  position: fixed;
  z-index: 5;
  margin-left: 60px;
  margin-top: 100px;
  color: white;

  h2 {
    margin: 0;
    font-size: 45px;
  }
  h3 {
    margin: 0;
    font-weight: 200;
    font-size: 30px;
  }
  button {
    margin-top: 40px;
    font-size: 12px;
    max-width: 69px;
    background: transparent;
    border: none;
    cursor: pointer;
    color: #fff;
    border-bottom: 1.5px solid #fff;
  }
`;
const ImgDiv = styled.div`
  position: relative;
  z-index: 1;
  img {
    width: 1100px;
    height: 400px;
  }
`;
// Featured Partners
const FeaturedPartners = styled.div`
  width: 100%;
  margin-top: 40px;
`;
const TitleDiv = styled.div`
  width: 1100px;
  color: #1c1c1c;
  font-size: 24px;
  font-weight: 550;
  text-align: center;
  margin: auto;
`;
const SubTitleDiv = styled.div`
  width: 1100px;
  margin: auto;
  color: #6c757d;
  font-size: 20px;
  margin-top: 11px;
  text-align: center;
`;
const LogoDiv = styled.div`
  height: 270px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;
const LogoLeft = styled.div``;
const LogoMiddle = styled.div`
  width: 1100px;
  height: 300;
  display: grid;
  grid-template-columns: repeat(6, 140px);
  grid-template-rows: repeat(2, 110px);
  gap: 20px;
  justify-content: space-between;

  img {
    width: 139px;
    height: 110px;
    cursor: pointer;
  }
`;
const LogoRight = styled.div``;
// Special Offers
const SpecialOffers = styled.div`
  margin: 0;
`;
const H2Div = styled.div`
  width: 1100px;
  height: 36px;
  text-align: center;
  margin: auto;
  border-bottom: 1px solid #c0bdbd;

  h2 {
    color: #1c1c1c;
    font-size: 24px;
    letter-spacing: 0.4px;
    margin-bottom: 7px;
  }
`;
const SpecialDiv = styled.div`
  width: 1180px;
  height: 630px;
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin: auto;
  margin-top: 30px;
  justify-content: center;
`;
const SpecialMiddle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 350px);
  grid-template-rows: repeat(1, 630px);
  margin: auto;
  width: 1100px;
  height: 100%;
  justify-content: space-between;
  text-align: center;
  color: #1c1c1c;

  img {
    width: 100%;
    height: 499px;
    cursor: pointer;
  }
  h2 {
    margin: 0;
    font-size: 20px;
    margin-top: 10px;
  }
  h3 {
    margin: 0;
    margin-top: 10px;
    font-size: 14px;
  }
  button {
    margin: 0;
    margin-top: 20px;
    font-size: 14px;
    height: 37px;
    width: 100px;
    background: #fff;
    font-weight: 550;
    border: 1px solid #1c1c1c;
    cursor: pointer;
  }
  button:hover {
    background: #000;
    color: #fff;
  }
`;
// Trending Now
const TrendingNow = styled.div`
  margin: 0;
`;
const TrendingDiv = styled.div`
  width: 1180px;
  height: 500px;
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin: auto;
  margin-top: 20px;
  justify-content: center;
`;
const TrendingMiddle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 260px);
  grid-template-rows: repeat(1, 500px);
  margin: auto;
  width: 1100px;
  height: 500px;
  justify-content: space-between;
  text-align: center;
  color: #1c1c1c;

  img {
    width: 90%;
    height: 290px;
    cursor: pointer;
  }
  h2 {
    margin: 0;
    margin-top: 10px;
    font-size: 14px;
  }
  h3 {
    margin: 0;
    margin-top: 10px;
    font-size: 12px;
    color: #8e8e8e;
  }
  h4 {
    margin: 0;
    margin-top: 10px;
    font-size: 12px;
    color: #1c1c1c;
  }
  button {
    margin: 0;
    margin-top: 20px;
    font-size: 14px;
    height: 37px;
    width: 100%;
    background: #fff;
    font-weight: 550;
    border: 1px solid #1c1c1c;
    cursor: pointer;
  }
  button:hover {
    background: #000;
    color: #fff;
  }
`;
// Community post
const CommunityMiddle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 270px);
  grid-template-rows: repeat(1, 380px);
  margin: auto;
  width: 1100px;
  height: 380px;
  justify-content: space-between;
  text-align: center;
  color: #1c1c1c;

  img {
    width: 100%;
    height: 380px;
    cursor: pointer;
  }
`;
const CommunityDiv = styled.div`
  width: 1180px;
  height: 380px;
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin: auto;
  margin-top: 20px;
  justify-content: center;
`;
const DownloadApp = styled.div`
  background: #f8f7f6;
  width: 100%;
  height: 770px;
  margin-top: 40px;
  display: flex;
  align-items: center;
`;
const InsideDiv = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;
const InnerDiv = styled.div`
  height: 670px;
  width: 42%;
  text-align: center;

  h2 {
    height: 80px;
    font-size: 24px;
    color: #1c1c1c;
    margin-top: 0;
    margin-bottom: 7px;
    letter-spacing: 0.4px;
    font-weight: 500;
  }
  p {
    height: 42px;
    font-size: 14px;
    color: #1c1c1c;
    margin-top: 0;
    margin-bottom: 14px;
    letter-spacing: 0.4px;
    font-weight: 500;
  }
  button {
    margin: 0;
    width: 150px;
    height: 40px;
    background: #000;
    color: #fff;
    font-size: 14px;
    font-weight: 550;
    margin-top: 25px;
    cursor: pointer;
  }
`;
const Img1 = styled.img`
  margin-top: 25px;
  width: 200px;
  height: 400px;
`;
const Img2 = styled.img`
  margin-top: 25px;
  width: 409px;
  height: 400px;
`;
const P = styled.p`
font-size: 14px;
color: #1c1c1c;
margin-top: 42px;
text-align: center;
font-weight: 550;
`

const Home = () => {
  // Banner
  const [banner, setBanner] = useState([]);
  const [id, setId] = useState(1);
  // Featured Partners
  const { pageNum, setPageNum, featPartners } = useContext(AppContext);
  // Special Offers
  const { pageNum1, setPageNum1, specialOffers } = useContext(AppContext);
  // Trending Now
  const { pageNum2, setPageNum2, trendingNow } = useContext(AppContext);
  // Community posts
  const { pageNum3, setPageNum3, communityP } = useContext(AppContext);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/banner/${id}`)
      .then((res) => setBanner(res.data))
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <MainDiv>
      <BannerDiv>
        <DivLeft>
          <BsArrowLeft
            onClick={() => {
              if (id < 2) setId(9);
              else setId(id - 1);
            }}
            style={{ fontSize: "28px", marginRight: "6px", cursor: "pointer" }}
          />
        </DivLeft>
        <DivMiddle>
          <OnImgDiv title={banner.title}>
            <h2>{banner.title}</h2>
            <h3>{banner.subTitle}</h3>
            <button>{banner.btn}</button>
          </OnImgDiv>
          <ImgDiv>
            <img src={banner.imgURL} alt="" />
          </ImgDiv>
        </DivMiddle>
        <DivRight>
          <BsArrowRight
            onClick={() => {
              if (id > 8) setId(1);
              else setId(id + 1);
            }}
            style={{ fontSize: "28px", marginLeft: "6px", cursor: "pointer" }}
          />
        </DivRight>
      </BannerDiv>
      <FeaturedPartners>
        <TitleDiv>Featured Partners</TitleDiv>
        <SubTitleDiv>
          Compare across our 500+ partner stores to find the products you want
          at the best price.
        </SubTitleDiv>
        <LogoDiv>
          <LogoLeft>
            <BsArrowLeft
              onClick={() => {
                if (pageNum < 2) setPageNum(2);
                else setPageNum(pageNum - 1);
              }}
              style={{
                fontSize: "28px",
                marginRight: "6px",
                cursor: "pointer",
              }}
            />
          </LogoLeft>
          <LogoMiddle>
            {featPartners.map((item) => (
              <div key={item.id}>
                <img src={item.imgURL} />
              </div>
            ))}
          </LogoMiddle>
          <LogoRight>
            <BsArrowRight
              onClick={() => {
                if (pageNum > 1) setPageNum(1);
                else setPageNum(pageNum + 1);
              }}
              style={{ fontSize: "28px", marginLeft: "6px", cursor: "pointer" }}
            />
          </LogoRight>
        </LogoDiv>
      </FeaturedPartners>
      {/* Special Offers */}
      <SpecialOffers>
        <H2Div>
          <h2>Special Offers</h2>
        </H2Div>
        <SpecialDiv>
          <LogoLeft>
            <BsArrowLeft
              onClick={() => {
                if (pageNum1 < 2) setPageNum1(2);
                else setPageNum1(pageNum1 - 1);
              }}
              style={{
                fontSize: "28px",
                marginRight: "6px",
                cursor: "pointer",
              }}
            />
          </LogoLeft>
          <SpecialMiddle>
            {specialOffers.map((item) => (
              <div key={item.id}>
                <img src={item.imgURL} alt="" />
                <h2>{item.title}</h2>
                <h3>{item.sub}</h3>
                <button>SHOP NOW</button>
              </div>
            ))}
          </SpecialMiddle>
          <LogoRight>
            <BsArrowRight
              onClick={() => {
                if (pageNum1 > 1) setPageNum1(1);
                else setPageNum1(pageNum1 + 1);
              }}
              style={{ fontSize: "28px", marginLeft: "6px", cursor: "pointer" }}
            />
          </LogoRight>
        </SpecialDiv>
      </SpecialOffers>
      {/* Trending Now */}
      <TrendingNow>
        <H2Div>
          <h2>Trending Now</h2>
        </H2Div>
        <TrendingDiv>
          <LogoLeft>
            <BsArrowLeft
              onClick={() => {
                if (pageNum2 < 2) setPageNum2(2);
                else setPageNum2(pageNum2 - 1);
              }}
              style={{
                fontSize: "28px",
                marginRight: "6px",
                cursor: "pointer",
              }}
            />
          </LogoLeft>
          <TrendingMiddle>
            {trendingNow.map((item) => (
              <div key={item.id}>
                <img src={item.imgURL} alt="" />
                <h2>{item.title}</h2>
                <h3>{item.sub}</h3>
                <h4>
                  ${item.min} - ${item.max}
                </h4>
                <h3>{item.stores} Stores</h3>
                <button>Quick View</button>
              </div>
            ))}
          </TrendingMiddle>
          <LogoRight>
            <BsArrowRight
              onClick={() => {
                if (pageNum2 > 1) setPageNum2(1);
                else setPageNum2(pageNum2 + 1);
              }}
              style={{ fontSize: "28px", marginLeft: "6px", cursor: "pointer" }}
            />
          </LogoRight>
        </TrendingDiv>
      </TrendingNow>
      {/* Community posts */}
      <TrendingNow>
        <H2Div>
          <h2>Community Posts</h2>
        </H2Div>
        <CommunityDiv>
          <LogoLeft>
            <BsArrowLeft
              onClick={() => {
                if (pageNum3 < 2) setPageNum3(3);
                else setPageNum3(pageNum3 - 1);
              }}
              style={{
                fontSize: "28px",
                marginRight: "6px",
                cursor: "pointer",
              }}
            />
          </LogoLeft>
          <CommunityMiddle>
            {communityP.map((item) => (
              <div key={item.id}>
                <img src={item.imgURL} alt="" />
              </div>
            ))}
          </CommunityMiddle>
          <LogoRight>
            <BsArrowRight
              onClick={() => {
                if (pageNum3 > 2) setPageNum3(1);
                else setPageNum3(pageNum3 + 1);
              }}
              style={{ fontSize: "28px", marginLeft: "6px", cursor: "pointer" }}
            />
          </LogoRight>
        </CommunityDiv>
      </TrendingNow>
      {/* Download & Install App*/}
      <DownloadApp>
        <InsideDiv>
          <InnerDiv>
            <h2>
              Download the <br /> ModeSense App
            </h2>
            <p>
              A seamless experience that takes your style <br />
              to the next level.
            </p>
            <div>
              <button>DOWNLOAD NOW</button>
            </div>
            <Img1 src="https://cdn.modesens.com/static/img/20220420AppDownloaden.png" />
          </InnerDiv>
          <InnerDiv>
            <h2>
              Install the ModeSens
              <br /> Browser Extension
            </h2>
            <p>
              Get timely, accurate product information
              <br />
              every time you browse.
            </p>
            <button>INSTALL NOW</button>
            <br />
            <Img2 src="https://cdn.modesens.com/static/img/20211109downloadright.png" />
          </InnerDiv>
        </InsideDiv>
      </DownloadApp>
      <P>When you follow our links to visit a brand or retailer’s website or make a purchase, ModeSens may earn a commission.</P>
    </MainDiv>
  );
};

export default Home;
