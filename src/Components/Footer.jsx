import React from "react";
import styled from "styled-components";
import { GoDeviceMobile } from 'react-icons/go';
import { FaFirefoxBrowser,FaRegCopyright } from 'react-icons/fa';
import { ImPinterest2 } from 'react-icons/im';
import { AiFillTwitterCircle, AiFillWechat } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';
import { BsFacebook } from 'react-icons/bs';

const MainDiv = styled.div`
margin-top: 80px;
`;
const UpperDiv = styled.div`
width: 1238px;
height: 276px;
color: #1c1c1c;
margin: auto;
font-size: 14px;
padding: 50px 0px;
box-sizing: border-box;
border: 1px solid #1c1c1c;
border-right: 0px;
border-left: 0px;
display: grid;
gap: 50px;
grid-template-columns: repeat(5,1fr);
grid-template-rows: repeat(1,100%);
justify-content: center;  
`;
const InnerDivs = styled.div`
width: 100%;
box-sizing: border-box;
color: #1c1c1c;

h3{
  margin: 0 0 14px;
  font-size: 15.5px;
  letter-spacing: 2px;
  font-weight: 500;
}
p{
  color: #7f7f7f;
  font-size: 14px;
  margin: 0;
  font-weight: 500;
}
input[type="text"]{
  margin: 0;
  width: 90%;
  height: 40px;
  font-size: 15px;
  outline: none;
  border: none;
  margin-bottom: 10px;
  border-bottom: 1.5px solid #1c1c1c;
}
label{
  margin-right: 10px;
  color: #1c1c1c;
  font-weight: 550;
}
button{
  width: 93.3%;
  height: 40px;
  letter-spacing: .5px;
  background: #fff;
  color: #1c1c1c;
  font-size: 15px;
  font-weight: 550;
  margin-top: 20px;
  border: 1px solid #1c1c1c;
}
`
const LowerDiv = styled.div`
width: 1238px;
height: 109px;
color: #1c1c1c;
margin: auto;
box-sizing: border-box;
margin-top: 5px;
padding: 28px 0px 30px;
display: flex;
align-items: center;
justify-content: space-between;

img{
  width: 34px;
  height: 41px;
}
p{
  margin-left: 10px;
}
`;
const Div1 = styled.div`
display: flex;
`

const Footer = () => {
  return (
    <MainDiv>
      <UpperDiv>
        <InnerDivs>
          <h3>CUSTOMER CARE</h3>
          <p>Shopper Protection</p>
          <p>Loyalty Program</p>
          <p>Help Center</p>
          <p>Size Guides</p>
          <p>Contact Us / Feedback</p>
          <p>Shipping / Returns</p>
        </InnerDivs>
        <InnerDivs>
          <h3>INFORMATION</h3>
          <p>About Us</p>
          <p>Influencer Program</p>
          <p>Partner Stores</p>
          <p>Sitemap</p>
        </InnerDivs>
        <InnerDivs>
          <h3>LEGAL</h3>
          <p>Terms of Use</p>
          <p>Disclosure</p>
          <p>Privacy Policy</p>
          <p>Community Guidelines</p>
        </InnerDivs>
        <InnerDivs>
          <h3>CONNECT WITH US</h3>
          <p><GoDeviceMobile/>ModeSens App <br /> for IOS and Android</p>
          <p><FaFirefoxBrowser/>Add to Browser</p>
        </InnerDivs>
        <InnerDivs>
          <h3>NEWSLETTER SIGN UP</h3>
          <input type="text" placeholder="Email Address"/>
          <br />
          <input type="radio" name="gender" value="womens"/>
          <label>Women's</label>
          <input type="radio" name="gender" value="mens"/>
          <label>Men's</label>
          <button>SUBMIT</button>
        </InnerDivs>
      </UpperDiv>
      <LowerDiv>
        <Div1>
          <img src="https://cdn.modesens.com/static/img/20180905footer_logo.svg" alt="" />
          <p><FaRegCopyright fontSize={'10px'}/> 2022, ModeSens Inc</p>
        </Div1>
        <Div1>
          <ImPinterest2 style={{marginRight: '15px', fontSize: '20px'}}/>
          <AiFillTwitterCircle style={{marginRight: '15px', fontSize: '20px'}}/>
          <FiInstagram style={{marginRight: '15px', fontSize: '20px'}}/>
          <BsFacebook style={{marginRight: '15px', fontSize: '20px'}}/>
          <AiFillWechat style={{marginRight: '15px', fontSize: '20px'}}/>
        </Div1>
      </LowerDiv>
    </MainDiv>
  );
};

export default Footer;
