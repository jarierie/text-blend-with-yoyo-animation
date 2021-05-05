import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import Transition from "./Transition";
import { ScrollTrigger } from "gsap/src/ScrollTrigger";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jfif";

gsap.registerPlugin(ScrollTrigger);

const MainContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  overflow: hidden;
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  min-height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const TextContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => props.fontSize};
  margin-left: ${(props) => props.margin};
  mix-blend-mode: difference;
  opacity: 0;
  p {
    color: #f5f5f5;
    font-weight: bold;
    margin: 0;
  }
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-top: ${(props) => props.top};
  margin-left: ${(props) => props.left};

  img {
    width: 100%;
    height: auto;
  }
`;

const Main = () => {
  const ref = useRef(null);

  const imageRef = useRef(null);
  const animation = () => {
    const tl = gsap.timeline({
      delay: 2.2,
    });
    tl.from(ref.current.childNodes[0], { x: "100%" })
      .from(
        ref.current.childNodes[1],
        {
          x: "-100%",
        },
        0
      )
      .to(ref.current.childNodes[0], { opacity: 1 }, 0)
      .to(ref.current.childNodes[1], { opacity: 1 }, 0);
  };
  const imageAnimation = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      imageRef.current.childNodes[0].firstChild,
      {
        x: window.innerWidth,
      },
      {
        x: `-${
          imageRef.current.childNodes[0].firstChild.getBoundingClientRect()
            .width + 10
        }`,
        duration: 3,
        delay: 4,
        repeat: -1,
        yoyo: true,
      }
    ).fromTo(
      imageRef.current.childNodes[1].firstChild,
      {
        x: 0,
      },
      {
        x:
          window.innerWidth +
          imageRef.current.childNodes[1].firstChild.getBoundingClientRect()
            .width *
            2,
        duration: 3,
        delay: 4,
        repeat: -1,
        yoyo: true,
      },
      0
    );
  };

  useEffect(() => {
    animation();
    imageAnimation();
  }, []);

  return (
    <>
      <Transition />
      <div ref={imageRef}>
        <ImageContainer top={"300px"}>
          <img src={image1} alt=''></img>
        </ImageContainer>
        <ImageContainer left={"-500px"} top={"200px"}>
          <img style={{ scale: 0.1 }} src={image2} alt=''></img>
        </ImageContainer>
      </div>
      <MainContainer>
        <Container ref={ref}>
          <TextContainer fontSize={"300px"} margin={"-500px"}>
            <p>Hello</p>
          </TextContainer>
          <TextContainer fontSize={"150px"} margin={"500px"}>
            <p>there!</p>
          </TextContainer>
        </Container>
      </MainContainer>
    </>
  );
};

export default Main;
