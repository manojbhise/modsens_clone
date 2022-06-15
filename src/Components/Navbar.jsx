import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { GoDeviceMobile } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";
import { BsHandbagFill } from "react-icons/bs";
import { MdManageAccounts } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Div = styled.div`
  width: 100vw;
`;
const TopDiv = styled.div`
  height: 37px;
  color: white;
  align-items: center;
  background: ${(props) => props.background};
  display: ${(props) => props.display};

  img {
    width: 18px;
    height: 18px;
    margin-left: 6%;
  }
  p {
    margin-left: 1.8%;
    font-size: 15px;
    font-weight: 500;
  }
  button {
    background: ${(props) => (props.background === "red" ? "black" : "red")};
    margin-left: 1.8%;
    border: none;
    outline: none;
    width: 140px;
    height: 30px;
    color: white;
    font-size: 11px;
    font-weight: 550;
    cursor: pointer;
    letter-spacing: 0.5px;
  }
`;
const BottomDiv = styled.div`
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: space-between;

  img {
    width: 160px;
    height: 50px;
    cursor: pointer;
    margin-left: 1.5%;
    margin-right: 1.5%;
  }
  ul {
    display: flex;
    list-style-type: none;
    margin-right: 5%;
  }
  li {
    font-size: 13px;
    font-weight: 550;
    margin-right: 20px;
  }
  li:hover {
    border-bottom: 1.8px solid red;
  }
`;
const Div1 = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 22px;
    height: 13px;
    margin-right: 15px;
  }
`;
const Div2 = styled.div`
  display: flex;
  align-items: center;

  input {
    width: 70px;
    height: 20px;
    margin-right: 5px;
    outline: none;
    border: none;
  }
`;
const Div3 = styled.div`
  display: ${(props) => props.hover1};
  z-index: 100;
  height: 50px;
  width: 100vw;
  align-items: center;
  border-top: 1.3px solid #c0b9b9;
  border-bottom: 1.3px solid #c0b9b9;
  position: absolute;
  background: white;
  justify-content: center;

  div {
    margin-right: 20px;
  }
  div:hover {
    border-bottom: 1.8px solid red;
  }
`;
const Div4 = styled.div`
  display: ${(props) => props.hover2};
  z-index: 100;
  height: 50px;
  width: 100vw;
  align-items: center;
  border-top: 1.3px solid #c0b9b9;
  border-bottom: 1.3px solid #c0b9b9;
  position: absolute;
  background: white;
  justify-content: center;

  div {
    margin-right: 20px;
  }
  div:hover {
    border-bottom: 1.8px solid red;
  }
`;
const Div5 = styled.div`
  display: ${(props) => props.hover3};
  z-index: 100;
  height: 50px;
  width: 100vw;
  align-items: center;
  border-top: 1.3px solid #c0b9b9;
  border-bottom: 1.3px solid #c0b9b9;
  position: absolute;
  background: white;
  justify-content: center;

  div {
    margin-right: 20px;
  }
  div:hover {
    border-bottom: 1.8px solid red;
  }
`;
const Div6 = styled.div`
  display: ${(props) => props.hover4};
  z-index: 100;
  height: 50px;
  width: 100vw;
  align-items: center;
  border-top: 1.3px solid #c0b9b9;
  border-bottom: 1.3px solid #c0b9b9;
  position: absolute;
  background: white;
  justify-content: center;

  div {
    margin-right: 20px;
  }
  div:hover {
    border-bottom: 1.8px solid red;
  }
`;
const Div7 = styled.div`
  display: ${(props) => props.hover6};
  z-index: 100;
  height: 50px;
  width: 100vw;
  align-items: center;
  border-top: 1.3px solid #c0b9b9;
  border-bottom: 1.3px solid #c0b9b9;
  position: absolute;
  background: white;
  justify-content: center;

  div {
    margin-right: 20px;
  }
  div:hover {
    border-bottom: 1.8px solid red;
  }
`;
const Div8 = styled.div`
  display: ${(props) => props.hover8};
  z-index: 100;
  height: 50px;
  width: 100vw;
  align-items: center;
  border-top: 1.3px solid #c0b9b9;
  border-bottom: 1.3px solid #c0b9b9;
  position: absolute;
  background: white;
  justify-content: center;

  div {
    margin-right: 20px;
  }
  div:hover {
    border-bottom: 1.8px solid red;
  }
`;

const Navbar = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState(3);
  const [display, setDisplay] = useState("flex");
  // for mouseover and mouseleave
  const [hover1, setHover1] = useState("none");
  const [hover2, setHover2] = useState("none");
  const [hover3, setHover3] = useState("none");
  const [hover4, setHover4] = useState("none");
  const [hover5, setHover5] = useState("none");
  const [hover6, setHover6] = useState("none");
  const [hover7, setHover7] = useState("none");
  const [hover8, setHover8] = useState("none");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/adsDetails/${id}`)
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <Div>
      <TopDiv background={data.background} display={display}>
        <AiOutlineLeft
          style={{
            height: "18px",
            width: "18px",
            marginLeft: "10%",
            cursor: "pointer",
          }}
          onClick={() => {
            if (id > 1) setId(id - 1);
            else setId(3);
          }}
        />
        <img src="https://cdn.modesens.com/static/img/20180929logo.svg" />
        <p>{data.info}</p>
        <button>
          <GoDeviceMobile
            style={{ height: "14px", width: "14px", marginRight: "10px" }}
          />
          {data.btn}
        </button>
        <AiOutlineRight
          style={{
            height: "18px",
            width: "18px",
            marginLeft: "11%",
            cursor: "pointer",
          }}
          onClick={() => {
            if (id < 3) setId(id + 1);
            else setId(1);
          }}
        />
        <AiOutlineClose
          style={{
            height: "18px",
            width: "18px",
            marginLeft: "9%",
            cursor: "pointer",
          }}
          onClick={() => {
            setDisplay("none");
          }}
        />
      </TopDiv>
      <BottomDiv>
        <img
          onClick={()=>navigate('')}
          src="https://cdn.modesens.com/static/img/20190228newlogo-black.svg"
        />

        <ul>
          <li>
            <Link
              onMouseEnter={() => {
                setHover1("flex");
              }}
              style={{ textDecoration: "none", color: "#1c1c1c" }}
              to="/"
            >
              WOMEN
            </Link>
          </li>
          <li>
            <Link
              onMouseEnter={() => {
                setHover2("flex");
              }}
              style={{ textDecoration: "none", color: "#1c1c1c" }}
              to="/"
            >
              MEN
            </Link>
          </li>
          <li>
            <Link
              onMouseEnter={() => {
                setHover3("flex");
              }}
              style={{ textDecoration: "none", color: "#1c1c1c" }}
              to="/shop-beauty"
            >
              BEAUTY
            </Link>
          </li>
          <li>
            <Link
              onMouseEnter={() => {
                setHover4("flex");
              }}
              style={{ textDecoration: "none", color: "#1c1c1c" }}
              to="/"
            >
              KIDS
            </Link>
          </li>
          <li>
            <Link
              onMouseEnter={() => {
                setHover5("flex");
              }}
              style={{ textDecoration: "none", color: "#1c1c1c" }}
              to="/"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              onMouseEnter={() => {
                setHover6("flex");
              }}
              style={{ textDecoration: "none", color: "#1c1c1c" }}
              to="/coupons"
            >
              OFFERS
            </Link>
          </li>
          <li>
            <Link
              onMouseEnter={() => {
                setHover7("flex");
              }}
              style={{ textDecoration: "none", color: "#1c1c1c" }}
              to="/designers"
            >
              DESIGNERS
            </Link>
          </li>
          <li>
            <Link
              onMouseEnter={() => {
                setHover8("flex");
              }}
              style={{ textDecoration: "none", color: "#1c1c1c" }}
              to="/community"
            >
              COMMUNITY
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none", color: "#1c1c1c" }}
              to="/why-modsens"
            >
              WHY MODSENS
            </Link>
          </li>
        </ul>
        <Div1>
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
            alt=""
          />
          <BsHandbagFill href="/checkout" style={{ fontSize: "20px", marginRight: "15px" }} />
          <MdManageAccounts style={{ fontSize: "25px", marginRight: "15px" }} />
          <Div2>
            <BsSearch style={{fontWeight: '550', fontSize: '15px'}}/>
            <input type="text" placeholder="SEARCH" />
          </Div2>
        </Div1>
      </BottomDiv>

      {/* Hover elements ----------------------->Women*/}
      <Div3
        hover1={hover1}
        onMouseLeave={() => {
          setHover1("none");
        }}
      >
        <div>
          <Link
            style={{
              color: "#1c1c1c",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "550",
            }}
            to="/shop-women"
          >
            SHOP ALL
          </Link>
        </div>
        <div>
          <Link
            style={{
              color: "#1c1c1c",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "550",
            }}
            to="/shop-women-clothing"
          >
            CLOTHING
          </Link>
        </div>
        <div>
          <Link
            style={{
              color: "#1c1c1c",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "550",
            }}
            to="/shop-women-bags"
          >
            BAGS
          </Link>
        </div>
        <div>
          <Link
            style={{
              color: "#1c1c1c",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "550",
            }}
            to="/shop-women-shoes"
          >
            SHOES
          </Link>
        </div>
        <div>
          <Link
            style={{
              color: "#1c1c1c",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "550",
            }}
            to="/shop-women-accessories"
          >
            ACCESSORIES
          </Link>
        </div>
        <div>
          <Link
            style={{
              color: "#1c1c1c",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "550",
            }}
            to="/shop-women-beauty"
          >
            BEAUTY
          </Link>
        </div>
        <div>
          <Link
            style={{
              color: "#1c1c1c",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "550",
              color: 'red'
            }}
            to="/shop-women-sale"
          >
            SALE
          </Link>
        </div>
        <div>
          <Link
            style={{
              color: "#1c1c1c",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "550",
            }}
            to="/pre-owned/shop-women"
          >
            PRE-OWNED
          </Link>
        </div>
        <div>
          <Link
            style={{
              color: "#1c1c1c",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "550",
            }}
            to="/shop-women-occasion"
          >
            OCCASION
          </Link>
        </div>
      </Div3>

      {/* Hover elements ----------------------->Men*/}
      <Div4
        hover2={hover2}
        onMouseLeave={() => {
          setHover2("none");
        }}
      >
        <div>
          <Link
            style={{
              color: "#1c1c1c",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "550",
            }}
            to="/shop-men"
          >
            SHOP ALL
          </Link>
        </div>
        <div>
          <Link
            style={{
              color: "#1c1c1c",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "550",
            }}
            to="/shop-men-clothing"
          >
            CLOTHING
          </Link>
        </div>
        <div>
          <Link
            style={{
              color: "#1c1c1c",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "550",
            }}
            to="/shop-men-bags"
          >
            BAGS
          </Link>
        </div>
        <div>
          <Link
            style={{
              color: "#1c1c1c",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "550",
            }}
            to="/shop-men-shoes"
          >
            SHOES
          </Link>
        </div>
        <div>
          <Link
            style={{
              color: "#1c1c1c",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "550",
            }}
            to="/shop-men-accessories"
          >
            ACCESSORIES
          </Link>
        </div>
        <div>
          <Link
            style={{
              color: "#1c1c1c",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "550",
            }}
            to="/shop-men-grooming"
          >
            GROOMING
          </Link>
        </div>
        <div>
          <Link
            style={{
              color: "#1c1c1c",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "550",
              color: 'red'
            }}
            to="/shop-men-sale"
          >
            SALE
          </Link>
        </div>
        <div>
          <Link
            style={{
              color: "#1c1c1c",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "550",
            }}
            to="/pre-owned/shop-men"
          >
            PRE-OWNED
          </Link>
        </div>
        <div>
          <Link
            style={{
              color: "#1c1c1c",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "550",
            }}
            to="/shop-men-occasion"
          >
            OCCASION
          </Link>
        </div>
      </Div4>
      {/* Hover elements ----------------------->Beauty */}
      <Div5
        hover3={hover3}
        onMouseLeave={() => {
          setHover3("none");
        }}
      >
        <div>
          <Link
            style={{
              color: "#1c1c1c",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "550",
            }}
            to="/shop-beauty"
          >
            SHOP ALL
          </Link>
        </div>
        <div>
          <Link
            style={{
              color: "#1c1c1c",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "550",
            }}
            to="/shop-women-beauty"
          >
            WOMEN'S BEAUTY
          </Link>
        </div>
        <div>
          <Link
            style={{
              color: "#1c1c1c",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "550",
            }}
            to="/shop-men-grooming"
          >
            MEN'S GROOMING
          </Link>
        </div>
        <div>
          <Link
            style={{
              color: "#1c1c1c",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "550",
            }}
            to="/shop-kids-care"
          >
            KID'S CARE
          </Link>
        </div>
      </Div5>
      {/* Hover elements ----------------------->Kids */}
      <Div6
        hover4={hover4}
        onMouseLeave={() => {
          setHover4("none");
        }}
      >
        <div>
          <Link
            style={{
              color: "#1c1c1c",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "550",
            }}
            to="/shop-KIDS"
          >
            SHOP ALL
          </Link>
        </div>
        <div>
          <Link
            style={{
              color: "#1c1c1c",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "550",
            }}
            to="/shop-baby-girls"
          >
            BABY GIRLS
          </Link>
        </div>
        <div>
          <Link
            style={{
              color: "#1c1c1c",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "550",
            }}
            to="/shop-baby-boys"
          >
            BABY BOYS
          </Link>
        </div>
        <div>
          <Link
            style={{
              color: "#1c1c1c",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "550",
            }}
            to="/shop-girls"
          >
            GIRLS
          </Link>
        </div>
        <div>
          <Link
            style={{
              color: "#1c1c1c",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "550",
            }}
            to="/shop-boys"
          >
            BOYS
          </Link>
        </div>
        <div>
          <Link
            style={{
              color: "#1c1c1c",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "550",
            }}
            to="/shop-kids-sale"
          >
            SALE
          </Link>
        </div>
      </Div6>
      {/* Hover elements ----------------------->Offers */}
      <Div7
        hover6={hover6}
        onMouseLeave={() => {
          setHover6("none");
        }}
      >
        <div>
          <Link
            style={{
              color: "#1c1c1c",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "550",
            }}
            to="/coupons"
          >
            COUPONS
          </Link>
        </div>
        <div>
          <Link
            style={{
              color: "#1c1c1c",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "550",
            }}
            to="/shop-women-sale"
          >
            WOMEN'S SALE
          </Link>
        </div>
        <div>
          <Link
            style={{
              color: "#1c1c1c",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "550",
            }}
            to="/shop-men-sale"
          >
            MEN'S SALE
          </Link>
        </div>
      </Div7>
      {/* Hover elements======================================>>Community */}
      <Div8
        hover8={hover8}
        onMouseLeave={() => {
          setHover8("none");
        }}
      >
        <div>
          <Link
            style={{
              color: "#1c1c1c",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "550",
            }}
            to="/coupons"
          >
            DISCOVER
          </Link>
        </div>
        <div>
          <Link
            style={{
              color: "#1c1c1c",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "550",
            }}
            to="/shop-women-sale"
          >
            MY CLOSET
          </Link>
        </div>
        <div>
          <Link
            style={{
              color: "#1c1c1c",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "550",
            }}
            to="/shop-men-sale"
          >
            EDITORIAL
          </Link>
        </div>
        <div>
          <Link
            style={{
              color: "#1c1c1c",
              textDecoration: "none",
              fontSize: "13px",
              fontWeight: "550",
            }}
            to="/shop-men-sale"
          >
            INFLUENCER PROGRAM
          </Link>
        </div>
      </Div8>
    </Div>
  );
};

export default Navbar;
