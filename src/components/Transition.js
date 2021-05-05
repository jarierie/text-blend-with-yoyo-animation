import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap, Linear } from "gsap";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  position: absolute;
`;

const Transition = () => {
  const ref = useRef(null);
  const tl = gsap.timeline();
  const animation = () => {
    tl.to(ref.current, {
      width: 0,
      duration: 2,
      ease: Linear.easeIn,
    }).to(ref.current, { backgroundColor: "gray", duration: 1 }, 0.5);
  };
  useEffect(() => {
    animation();
  }, []);
  return (
    <>
      <Container ref={ref}></Container>
    </>
  );
};

export default Transition;
