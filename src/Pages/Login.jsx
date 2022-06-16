import React from "react";
import styled from "styled-components";
import { BsFillHandbagFill, BsFillHeartFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { AiOutlineSave } from "react-icons/ai";
import { MdDataSaverOff } from "react-icons/md";

const MainDiv = styled.div`
  width: 1015px;
  height: 664px;
  margin: auto;
  margin-top: 60px;
  background: #f0ecec;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;
const LeftDiv = styled.div`
  width: 50%;
  display: flex;
  position: relative;
`;
const LowerDiv = styled.div`
  img {
    width: 100%;
    height: 664px;
    z-index: 2;
    left: 0px;
    top: 0px;
    position: absolute;
  }
`;
const UpperDiv = styled.div`
  width: 70%;
  height: 300px;
  background: #212121;
  opacity: 0.7;
  z-index: 3;
  left: 15%;
  top: 33%;
  position: absolute;
  color: #fff;
  text-align: left;
  font-weight: 550;
  box-sizing: border-box;

  img {
    width: 100%;
  }
  p {
    padding-left: 40px;
  }
`;

const RightDiv = styled.div`
  width: 49%;
`;

const Login = () => {
  return (
    <MainDiv>
      <LeftDiv>
        <LowerDiv>
          <img
            src="https://i.pinimg.com/originals/1b/91/39/1b913923c2517304d00324b174b7433f.jpg"
            alt=""
          />
        </LowerDiv>
        <UpperDiv>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfI2p7YKkg-T8uAceBDRoAWhiqVQhYAZi__5zXyA2bD_DhffvrEPMIinaTTcOwY4-tMg&usqp=CAU"
            alt=""
          />
          <p>
            <BsFillHandbagFill />
            Compare across 500+ stores
          </p>
          <p>
            <IoMdNotifications />
            Get alert on your items
          </p>
          <p>
            <AiOutlineSave />
            Save your searches
          </p>
          <p>
            <BsFillHeartFill />
            Manage your shopping lists
          </p>
          <p>
            <MdDataSaverOff style={{ color: "#fff" }} />
            Earn points
          </p>
        </UpperDiv>
      </LeftDiv>
      <RightDiv></RightDiv>
    </MainDiv>
  );
};

export default Login;
