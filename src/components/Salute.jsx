import React from "react";
import styled from "styled-components";
import Person from "../assets/img/person.png";
import { mobile } from "../responsive";
const Container = styled.div`
  height: 100vh;
  display: flex;
  background-color: #111;
  align-items: center;
  overflow: hidden;
`;
const SaluteTxtContainer = styled.div`
  flex: 3;

  transform: translateY(${(props) => props.position * 0.2}px);
`;
const SaluteText = styled.h1`
  color: #585353;
  font-size: 60vw;
  cursor: default;
`;

const SaluteImgContainer = styled.div`
  flex: 1;

  transform: translate(
    ${(props) => props.position * 0.6}px,
    ${(props) => props.position * 0.7}px
  );
`;

const Img = styled.img`
  width: 100%;
  height: 95vh;
  ${mobile({
    maxWidth: "100%",
    maxHeight: "60vh",
  })}
`;

export const Salute = ({ position }) => {
  return (
    <Container>
      <SaluteTxtContainer position={position}>
        <SaluteText>Hi</SaluteText>
      </SaluteTxtContainer>

      <SaluteImgContainer position={position}>
        <Img src={Person} alt="Person" />
      </SaluteImgContainer>
    </Container>
  );
};
