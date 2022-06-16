import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Featured Partners
  const [featPartners, setFeatPartners] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/featured_partners?_page=${pageNum}&_limit=12`)
      .then((res) => setFeatPartners(res.data))
      .catch((e) => console.log(e));
  }, [pageNum]);

  // Special Offers
  const [specialOffers, setSpecialOffers] = useState([]);
  const [pageNum1, setPageNum1] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/special_offers?_page=${pageNum1}&_limit=3`)
      .then((res) => setSpecialOffers(res.data))
      .catch((e) => console.log(e));
  }, [pageNum1]);

  // Trending Now
  const [trendingNow, setTrendingNow] = useState([]);
  const [pageNum2, setPageNum2] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/trending_now?_page=${pageNum2}&_limit=4`)
      .then((res) => setTrendingNow(res.data))
      .catch((e) => console.log(e));
  }, [pageNum2]);

  // Community Posts
  const [communityP, setCommunityP] = useState([]);
  const [pageNum3, setPageNum3] = useState(1);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/community_post?_page=${pageNum3}&_limit=4`)
      .then((res) => setCommunityP(res.data))
      .catch((e) => console.log(e));
  }, [pageNum3]);

  // Shop women
  const [shopW, setShopW] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/shop_women`)
      .then((res) => setShopW(res.data))
      .catch((e) => console.log(e));
  }, []);

  // Shop men
  const [shopM, setShopM] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/shop_men`)
      .then((res) => setShopM(res.data))
      .catch((e) => console.log(e));
  }, []);

  // Shop beauty
  const [shopB, setShopB] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/shop_beauty`)
      .then((res) => setShopB(res.data))
      .catch((e) => console.log(e));
  }, []);

  // Shop kids
  const [shopK, setShopK] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/shop_kids`)
      .then((res) => setShopK(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <AppContext.Provider
      value={{
        pageNum,
        setPageNum,
        featPartners,
        pageNum1,
        setPageNum1,
        specialOffers,
        pageNum2,
        setPageNum2,
        trendingNow,
        pageNum3,
        setPageNum3,
        communityP,
        shopW,
        shopM,
        shopB,
        shopK
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
