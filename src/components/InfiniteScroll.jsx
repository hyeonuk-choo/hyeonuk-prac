import React from "react";
import { memo, useCallback, useEffect, useState, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Item from "./Item";
import Loader from "./Loader";

const InfiniteScroll = () => {
  const targetRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [itemLists, setItemLists] = useState([]);

  // useEffect(() => {
  //   console.log(itemLists);
  // }, [itemLists]);

  const getMoreItem = async () => {
    setIsLoaded(true);

    let Items = [{}, {}, {}];
    let a = await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("a", a);

    setItemLists((prev) => prev.concat(Items));

    setIsLoaded(false);
  };

  const onIntersect = async ([entry], observer) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer;
    if (targetRef) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 0.5,
      });
      observer.observe(targetRef.current);
    }
    return () => observer && observer.disconnect();
  }, []);

  // console.log("targetRef", targetRef);
  // console.log("targetRef.current", targetRef.current);
  return (
    <>
      <GlobalStyle />
      <AppWrap>
        {itemLists.map((v, i) => {
          return <Item number={i + 1} key={i} />;
        })}
        <div ref={targetRef} className="Target-Element">
          {isLoaded && <Loader />}
        </div>
      </AppWrap>
    </>
  );
};

export default memo(InfiniteScroll);

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
  }

  body {
    background-color: #f2f5f7;
  }
`;

const AppWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;

  .Target-Element {
    width: 100vw;
    height: 140px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
`;
