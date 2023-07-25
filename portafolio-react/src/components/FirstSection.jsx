import React from "react";
import { styled } from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1000px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding-left: 20px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 5px;
    padding-top: 50px;
    /* background-color: #a19191; */
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    /* background-color: #fc27bc; */
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
    gap: 0px;
  }
`;

const Title = styled.h1`
  font-size: 40px;
  margin: 10px;
  font-family: "Concert One", cursive;

  @media only screen and (max-width: 768px) {
    padding: 12px;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
`;

const SubTitle = styled.h2`
  color: #da4ea2;
  font-family: "Josefin Slab", serif;
  margin: 10px;
`;

const Desc = styled.p`
  width: 500px;
  font-size: 24px;
  margin: 10px;
  color: lightgray;
  font-family: "Josefin Slab", serif;
  @media screen and (max-width: 768px) {
    padding: 12px;
    text-align: center;
  }

  @media screen and (max-width: 395px) {
    width: 100%;
    text-align: center;
  }

  /* @media screen and (max-width: 480px){
    min-width: 100px;
  } */
`;

const Button = styled.a`
  --bg: #c0eee4;
  --hover-bg: #ff90e8;
  --hover-text: #000;
  font-family: "Concert One", cursive;
  width: 100px;
  padding: 0.8em 2em;
  margin: 10px;
  border: 1px solid var(--hover-text);
  border-radius: 4px;
  background: var(--hover-text);
  color: #fff;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: var(--hover-text);
    transform: translate(-0.2rem, -0.25rem);
    background-color: var(--hover-bg);
    box-shadow: 0.25rem 0.25rem var(--hover-text);
  }
  &:active {
    transform: translate(0);
    box-shadow: none;
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 250px;
  height: 250px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 50%;
  animation: animate 2s infinite ease alternate;

  @media screen and (max-width: 768px) {
    /* width: 300px;
    height:300px */
    display: none;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const FirstSection = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Hi!</Title>
          <Title>My Name is Alexander</Title>
          <WhatWeDo>
            <SubTitle>- What I do?</SubTitle>
          </WhatWeDo>
          <Desc>
            Web Developer, Passionate about discovering new technologies to
            solve your problems.
          </Desc>
          <Button href="https://www.linkedin.com/in/alexander-ramirez-chiquito-92a23a280/">
            Here Me :3
          </Button>
        </Left>
        <Right>
          <Img src="./img/img.webp" />
        </Right>
      </Container>
    </Section>
  );
};

export default FirstSection;
