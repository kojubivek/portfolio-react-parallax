import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  height: 100vh;
  background-color: purple;
  z-index: 1;
  overflow: hidden;
`;
const Text = styled.h1`
  font-size: 20vw;
  color: #a26969;
  cursor: default;
  text-align: center;
  line-height: 100vh;
  transform: translateY(${(props) => props.position * 0.2}px);
`;
export const Name = ({ position }) => {
  return (
    <Container>
      <Text position={position}>I'm Bivek,</Text>
    </Container>
  );
};
