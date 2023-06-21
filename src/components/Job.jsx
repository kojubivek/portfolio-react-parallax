import React from "react";
import { styled } from "styled-components";
import bgImg from "../assets/img/bg1.png";
import bgImg2 from "../assets/img/bg2.png";
const Container = styled.div`
  overflow: hidden;
`;

const Text = styled.h1`
  font-size: 10vw;
  color: #a26969;
  cursor: default;
  text-align: center;
  line-height: 100vh;

  transform: translateX(calc(200vh - ${(props) => props.position}px));
`;
const TextContainer = styled.div`
  height: 100vh;
  background-color: ${(props) => props.color};
  background-image: url(${(props) => props.img});

  background-position-y: ${(props) => props.position * 0.5}px;
`;
const TextContainer2 = styled.div`
  height: 100vh;
  background-color: ${(props) => props.color};
  background-image: url(${(props) => props.img});

  background-position-y: -${(props) => props.position * 0.5}px;
`;
export const Job = ({ position }) => {
  return (
    <Container>
      <TextContainer position={position} img={bgImg} color="black">
        <Text position={position}>a Web Developer</Text>
      </TextContainer>
      <TextContainer2 position={position} img={bgImg2} color="purple">
        <Text position={position * 0.6}>and a Designer </Text>
      </TextContainer2>
    </Container>
  );
};
