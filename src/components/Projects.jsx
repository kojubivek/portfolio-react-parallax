import React from "react";
import { styled } from "styled-components";
import phone from "../assets/img/phone.png";
import laptop from "../assets/img/laptop.png";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { mobile } from "../responsive";
import libraryImg from "../assets/img/screencapture-library-server-9l87-onrender-books-2023-06-22-13_49_21.png";

import laptopImg from "../assets/img/MergedImages.png";

const Container = styled.div`
  max-height: "400vh";
  background-color: #111;
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding: 0 10px;

  overflow: hidden;
  ${mobile({
    maxHeight: "max-content",

    backgroundColor: "black",
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
  max-height: "max-content";
  gap: 100px;
  align-items: center;
  margin-top: 20px;

  &:nth-child(2n) {
    flex-direction: row-reverse;
  }

  ${mobile({
    display: "flex",
    maxHeight: "max-content",
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
const PhoneImg = styled.img``;
const PhoneScreen = styled.div`
  width: 264px;
  height: 567px;
  background-color: black;
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
  padding: 15px;
  line-height: 5vh;
  ${mobile({
    lineHeight: "6vh",
  })}
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
  max-height: 379px;
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
  background-color: black;
  top: 18px;
  left: 68px;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Image = styled.img`
  margin-top: 5px;
  width: 100%;
`;

const Link = styled.a``;

export const Projects = ({ position }) => {
  return (
    <Container>
      <SectionTitle position={position}>
        Here are some of my projects
      </SectionTitle>
      <Project>
        <Phone position={position}>
          <PhoneImg src={phone} />
          <PhoneScreen>
            <Image src={libraryImg} />
          </PhoneScreen>
        </Phone>
        <ProjectDetails>
          <Title>Library Management</Title>
          <Description>
            The library management system provides a digital interface for users
            to explore and interact with the library's collection of books. It
            facilitates borrowing, and personalized user profiles, making the
            library's resources easily accessible and manageable for both
            students and teachers. <br></br>The technologies used in the library
            management system are React, React Bootstrap, Redux, Axios, Node.js,
            Express, MongoDB, Mongoose, bcrypt, JWT, JavaScript, HTML, CSS, and
            JSON.
          </Description>

          <Link
            href="https://library-server-9l87.onrender.com/"
            target="_blank"
            alt="Visit Page"
          >
            {" "}
            <Button>Visit</Button>
          </Link>
        </ProjectDetails>
      </Project>
      <Project>
        <Laptop position={position}>
          <LaptopImg src={laptop} />
          <LaptopScreen>
            <Image src={laptopImg} />
          </LaptopScreen>
        </Laptop>
        <ProjectDetails>
          <Title>
            {" "}
            FootyBaller
            <SportsSoccerIcon />
          </Title>
          <Description>
            Your go-to e-commerce website for football apparel. Shop jerseys,
            shoes, and jackets with ease. Secure payments, top brands, and a
            seamless experience. For football players and fans alike,
            FootyBaller delivers quality and convenience. The FootyBaller
            e-commerce app, built on the MERN (MongoDB, Express.js, React,
            Node.js) stack, incorporates technologies like Styled Components for
            styling, Redux Toolkit for state management, and integrates JWT and
            Stripe API for authentication and payment processing, along with an
            intuitive admin panel for seamless management of products, users,
            and orders.
          </Description>
          <Link
            href="https://github.com/kojubivek/e-coom-styled-client"
            target="_blank"
          >
            {" "}
            <Button>Visit</Button>
          </Link>
        </ProjectDetails>
      </Project>
    </Container>
  );
};
