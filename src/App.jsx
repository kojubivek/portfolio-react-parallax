import { useEffect, useState } from "react";

import "./App.css";
import { Intro } from "./components/Intro";
import { Salute } from "./components/Salute";
import { SaluteContainer } from "./components/SaluteContainer";
import { SaluteText } from "./components/SaluteText";
import { SaluteImgContainer } from "./components/SaluteImgContainer";
import { Projects } from "./components/Projects";
import { Github } from "./components/Github";
import { styled } from "styled-components";
import { Name } from "./components/Name";
import { Job } from "./components/Job";

const Container = styled.div``;
// window.addEventListener(("scroll") => {
//   console.log(window.scrollY());
// });

const App = () => {
  const [scroll, setscroll] = useState(0);

  const handleScroll = () => {
    setscroll(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => handleScroll());
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <Intro position={scroll} />
      <Name position={scroll} />
      <Job position={scroll} />
      <Projects position={scroll} />
      <Github position={scroll} />
    </Container>
  );
};

export default App;
