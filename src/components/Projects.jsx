import React from "react";
import { styled } from "styled-components";
import phone from "../assets/img/phone.png";
import laptop from "../assets/img/laptop.png";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { mobile } from "../responsive";
const Container = styled.div`
  max-height: 250vh;
  background-color: #111;
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding: 0 10px;
  overflow: hidden;
  ${mobile({
    maxHeight: "max-content",
  })}
`;
const SectionTitle = styled.h1`
  color: #6f6e6e;
  font-size: 20vh;

  padding: 10px 20px;
  transform: translateY(calc(375vh - ${(props) => props.position}px));

  ${mobile({
    fontSize: "10vh",
    textAlign: "center",
  })}
`;
const Title = styled.h1`
  color: #e68660;
  font-size: 6vh;
  display: flex;
`;
const Project = styled.div`
  display: flex;
  height: 150vh;
  gap: 100px;
  align-items: center;
  margin-top: 20px;

  &:nth-child(2n) {
    flex-direction: row-reverse;
  }

  ${mobile({
    display: "flex",
    flexGap: 0,
    flexDirection: "column",
    "&:nth-child(2n)": {
      flexDirection: "column",
    },
  })}
`;
const Phone = styled.div`
  width: 300px;
  max-height: 600px;
  position: relative;
  flex: 1;

  transform: translateX(calc(450vh - ${(props) => props.position}px));

  ${mobile({
    transform: "none",
  })}
`;
const PhoneImg = styled.img`
  //width: 100%;
`;
const PhoneScreen = styled.div`
  width: 264px;
  height: 567px;
  background-color: blue;
  position: absolute;
  top: 17px;
  left: 18px;
  border-radius: 28px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ProjectDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`;
const Description = styled.p`
  font-style: 7px;
  color: #cbc6c6;
  line-height: 8vh;
`;

const Button = styled.button`
  width: 150px;
  padding: 10px 20px;
  border: 2px solid #6b6a6a;
  background-color: transparent;
  cursor: pointer;
  color: #e68660;
  position: relative;
  overflow: hidden;
  border-radius: 15px;

  &::after {
    content: "View Demo";
    padding: 10px 20px;
    width: 150px;

    position: absolute;
    border-radius: 15px;
    top: 0;
    left: -150%;
    background-color: #3e3c3b;

    transition: 0.5s all ease;
  }

  :hover &::after {
    transform: translateX(105%);
  }
`;
const Laptop = styled.div`
  width: 600px;
  height: 379px;
  flex: 1;
  position: relative;
  transform: translateX(calc(550vh - ${(props) => props.position}px));
  ${mobile({
    transform: "none",
  })}
`;
const LaptopImg = styled.img`
  //width: 100%;
`;
const LaptopScreen = styled.div`
  width: 451px;
  height: 283px;
  position: absolute;
  background-color: blue;
  top: 18px;
  left: 68px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Projects = ({ position }) => {
  return (
    <Container>
      <SectionTitle position={position}>
        Here are some of my projects
      </SectionTitle>
      <Project>
        <Phone position={position}>
          <PhoneImg src={phone} />
          <PhoneScreen></PhoneScreen>
        </Phone>
        <ProjectDetails>
          <Title>
            FootyBaller
            <SportsSoccerIcon />
          </Title>
          <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
            voluptatum soluta aperiam aut sequi quasi? Provident eius suscipit
            inventore culpa commodi optio consequatur nam facere, soluta
            tenetur. Soluta, facilis deleniti.
          </Description>
          <Button>Visit</Button>
        </ProjectDetails>
      </Project>
      <Project>
        <Laptop position={position}>
          <LaptopImg src={laptop} />
          <LaptopScreen></LaptopScreen>
        </Laptop>
        <ProjectDetails>
          <Title>Library Management </Title>
          <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
            voluptatum soluta aperiam aut sequi quasi? Provident eius suscipit
            inventore culpa commodi optio consequatur nam facere, soluta
            tenetur. Soluta, facilis deleniti.
          </Description>
          <Button>Visit</Button>
        </ProjectDetails>
      </Project>
    </Container>
  );
};
