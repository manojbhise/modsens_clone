import React, { useContext } from "react";
import { AppContext } from "../Context/AppProvider";
import styled from "styled-components";

const MainDiv = styled.div`
  width: 97%;
  margin: auto;
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
`;
const LeftDiv = styled.div`
  width: 16%;

  p{
    margin-top: 120px;
    font-size: 12px;
    color: #8e8e8e;
    font-weight: 500; 
  }
  h3{
    // margin-top: 120px;
    font-size: 14px;
    color: #1c1c1c;
    font-weight: 500;     
  }
`;
const RightDiv = styled.div`
  width: 83%;
  color: #1c1c1c;

  h2 {
    margin: 0;
    font-size: 24px;
    font-weight: 500;
  }
  p {
    margin-top: 20;
    font-size: 12px;
    font-weight: 500;
  }
`;
const GridDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 220px);
  grid-template-rows: repeat(6, 400px);
  margin: auto;
  width: 100%;
  margin-top: 50px;
  justify-content: space-between;
  text-align: center;
  color: #1c1c1c;

  img {
    width: 70%;
    height: 200px;
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

const Shop_Women = () => {
  const { shopW } = useContext(AppContext);
  console.log(shopW);

  return (
    <MainDiv>
      <LeftDiv>
        <p>MODESENS / SHOP / WOMEN</p>
        <h3>CATEGORY</h3>
        <h3>DESIGNER</h3>
        <h3>SIZE</h3>
        <h3>COLOR</h3>
        <h3>PRICE RANGE</h3>
        <h3>ON SALE</h3>
        <h3>STORE</h3>
        <h3>KEYWORD</h3>
      </LeftDiv>
      <RightDiv>
        <h2>Women's Fashion & Designer Products</h2>
        <p>
          women's fashion with price comparison across 500+ stores in one place.
          Discover the latest designer fashion for women at ModeSens.
        </p>
        <GridDiv>
          {shopW.map((item) => (
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
        </GridDiv>
      </RightDiv>
    </MainDiv>
  );
};

export default Shop_Women;
