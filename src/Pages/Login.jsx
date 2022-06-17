import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { BsFillHandbagFill, BsFillHeartFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { AiOutlineSave } from "react-icons/ai";
import { MdDataSaverOff } from "react-icons/md";
import { AppContext } from "../Context/AppProvider";
import axios from "axios";

const MainDiv = styled.div`
  width: 900px;
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
  display: flex;
  align-items: center;
  text-align: center;
`;
const InnerDiv = styled.div`
  width: 308px;
  text-align: center;
  margin: auto;
`;
const Title = styled.h2`
  font-weight: 400;
  font-size: 18px;
  color: #1e1f21;
  margin: 0;
`;
const P1 = styled.p`
  font-size: 14px;
`;
const Div1 = styled.div`
  margin-top: 8px;
  input {
    width: 96%;
    font-size: 14px;
    height: 34px;
    outline: none;
    padding-left: 10px;
    border: 1px solid #1c1c1c;
  }
`;
const Div2 = styled.div`
  display: ${(props) => (props.isLoggedIn ? "none" : "flex")};
  align-items: center;
  margin-top: 10px;

  label {
    font-size: 12px;
    color: #1c1c1c;
    font-weight: 500;
  }
`;
const ForgotP = styled.p`
  margin: 0;
  display: ${(props) => props.isLoggedIn === false && "none"};
`;
const Button = styled.button`
  width: 302px;
  height: 37px;
  margin-top: 25px;
  background: #1c1c1c;
  color: #fff;
  font-weight: 550;
  cursor: pointer;
  letter-spacing: 0.3px;
`;
const P2 = styled.p``;
const SocialIcons = styled.div`
  img {
    margin-right: 10px;
  }
`;
const P3 = styled.p`
  text-decoration: underline;
  cursor: pointer;
`;
const P4 = styled.p`
  display: ${(props) => props.isLoggedIn === true && "none"};
`;

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const { loginData, setLoginData, loginForm, setLoginForm } = useContext(AppContext);
  const [loginForm, setLoginForm] = useState({});
  const [newLogin, setNewLogin] = useState({});
  const [data, setData] = useState([]);

  const onChange = (e) => {
    const { name } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      axios
        .get("http://localhost:8080/loginData")
        .then((res) => setData(res.data))
        .catch((e) => console.log(e));
      console.log("data", data);
    } else {
      if (loginForm.email !== "" && loginForm.password !== "") {
        axios.post("http://localhost:8080/loginData", {
          email: loginForm.email,
          password: loginForm.password,
        });
        alert("Sign Up Successful");
        setLoginForm({});
      }
      else{
        alert('Fill all fields');
      }
    }
  };

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
      <RightDiv>
        <InnerDiv>
          <Title>
            {isLoggedIn ? "Log in to your account" : "Create an account"}
          </Title>
          <P1>
            Compare across 500+ stores <br />
            to find the best price.
          </P1>
          <Div1>
            <input
              type="email"
              name="email"
              value={loginForm.name}
              onChange={onChange}
              placeholder="Email"
            />
          </Div1>
          <Div1>
            <input
              type="password"
              name="password"
              value={loginForm.name}
              onChange={onChange}
              placeholder="Password"
            />
          </Div1>
          <Div2 isLoggedIn={isLoggedIn}>
            <input type="checkbox" />
            <label>Subscribe to personalized sale updates and offers</label>
          </Div2>
          <ForgotP isLoggedIn={isLoggedIn}>Forgot Password?</ForgotP>
          <Button onClick={onSubmit}>
            {isLoggedIn ? "LOG IN" : "Sign Up"}
          </Button>
          <P2>or</P2>
          <SocialIcons>
            <img
              src="https://modesens.com/static/img/login-icon/20210617google.svg"
              alt=""
            />
            <img
              src="https://modesens.com/static/img/login-icon/20210617facebook.svg"
              alt=""
            />
            <img
              src="https://modesens.com/static/img/login-icon/20210617apple.svg"
              alt=""
            />
            <img
              src="https://modesens.com/static/img/login-icon/20210617wechat.svg"
              alt=""
            />
          </SocialIcons>
          <P3
            onClick={() => {
              setIsLoggedIn(!isLoggedIn);
              setLoginForm({});
            }}
          >
            {isLoggedIn
              ? "Don't have an account? Please sign up."
              : "Already have an account? Please Sign in."}
          </P3>
          <P4 isLoggedIn={isLoggedIn}>
            By creating an account, I agree to <br />
            the Terms of Use and the Privacy Policy
          </P4>
        </InnerDiv>
      </RightDiv>
    </MainDiv>
  );
};

export default Login;
