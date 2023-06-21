import React from "react";
import { styled } from "styled-components";
import githubImg from "../assets/img/github.png";
import { mobile } from "../responsive";
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Agu",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const list = [
  0, 1, 2, 3, 41, 42, 43, 44, 82, 83, 123, 124, 125, 126, 164, 165, 166, 167,
  205, 206, 246, 247, 287, 288, 5, 6, 46, 47, 87, 88, 128, 129, 169, 170, 210,
  211, 251, 252, 292, 293, 8, 9, 14, 15, 49, 50, 51, 90, 91, 92, 131, 132, 133,
  134, 172, 173, 213, 214, 254, 255, 295, 296, 175, 176, 217, 177, 218, 259, 55,
  56, 96, 97, 137, 138, 178, 179, 219, 220, 260, 261, 217, 218, 259, 260, 261,
  301, 302, 17, 18, 19, 58, 59, 60, 61, 99, 100, 102, 103, 140, 141, 144, 181,
  182, 185, 222, 223, 225, 226, 263, 264, 265, 266, 304, 305, 306, 24, 25, 65,
  66, 67, 106, 107, 108, 147, 148, 149, 150, 188, 189, 229, 230, 270, 271, 311,
  312, 67, 108, 149, 150, 191, 232, 192, 233, 274, 234, 275, 316, 194, 235, 276,
  154, 195, 236, 73, 114, 155, 33, 34, 74, 75, 115, 116, 156, 157, 197, 198,
  238, 239, 279, 280, 320, 321, 36, 37, 38, 39, 77, 78, 79, 80, 118, 119, 159,
  160, 161, 162, 200, 201, 202, 203, 241, 242, 282, 283, 284, 285, 323, 324,
  325, 326,
];
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: black;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 100px;
  color: #f2d5d5;
  text-align: center;
`;
const Box = styled.div`
  width: 15px;
  height: 15px;
  background-color: rgb(35, 34, 34);
  border: 2px black solid;
  border-radius: 2px;
  cursor: pointer;
  transition: 2s all ease;
  &:nth-child(2n) {
    background-color: ${(props) =>
      props.state ? "limegreen" : "rgb(35,34,34)"};
  }
  /* &:nth-child(2n + 1) {
    background-color: ${(props) =>
    props.state ? "darkgreen" : "rgb(37,37,37) "};
  } */
  /* &:nth-child(4n) {
    background-color: ${(props) =>
    props.state ? "seagreen" : "rgb(53,53,53)"};
  } */
`;
const GithubChart = styled.div`
  width: 820px;
  text-align: center;
  ${mobile({
    display: "none",
  })}
`;

const Dates = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Month = styled.span`
  color: #8d8b8b;
`;

const BoxContainer = styled.div`
  display: flex;
  margin-left: 5px;
  flex-wrap: wrap;
  gap: 5px;
`;

const GithubSm = styled.div`
  display: none;
  ${mobile({
    display: "flex",
    flexDirection: "column",
    gap: "100px",
    alignItems: "center",
    cursor: "pointer",
  })}
`;

const Link = styled.a``;

const GithubImg = styled.img``;

const GithubTitle = styled.h1``;

export const Github = () => {
  return (
    <Container>
      <Title>Sell All My Projects</Title>
      <Link
        placeholder="click to visit"
        info="click to visit"
        href="https://github.com/kojubivek"
      >
        <GithubChart className="chart">
          <Dates>
            {months.map((month, i) => (
              <Month key={i}>{month}</Month>
            ))}
          </Dates>
          <BoxContainer>
            {" "}
            {Array.from({ length: 365 }, (_, index) =>
              list.includes(index) ? (
                <Box className="box active" state={true} key={index} />
              ) : (
                <Box className="box" state={false} key={index} />
              )
            )}
          </BoxContainer>

          <Title>On GITHUB</Title>
        </GithubChart>
      </Link>

      <GithubSm>
        <Link placeholder="click to visit" href="https://github.com/kojubivek">
          <GithubImg src={githubImg} alt="click to visit" />
        </Link>
        <Title>Find Me On Github</Title>
      </GithubSm>
    </Container>
  );
};
