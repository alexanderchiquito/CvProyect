import { styled } from "styled-components";
import Navbar from "./Navbar";

const Section = styled.div`
  height: 100vh;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    height: 140vh;
  }

  @media screen and (max-width: 390px) {
      height: 100vh;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  width: 1000px;
  margin: 0;
  padding: 0 20px;
  margin-top: 60px;

  @media screen and (max-width: 1000px) {
    width: 100%;
    padding-left: 20px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 480px) {
    width: 390px;
    margin: 0 auto;
  }

`;

const Section2 = styled.section`
  position: relative;
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    right: 165px;
  }

`;

const Left = styled.div`
  grid-column: 1; /* Ocupar toda la columna */
  position: relative;
  text-align: left;
  right: -37%;
  padding: 0.25em 1em;
  font-family: "Concert One", cursive;
  align-self: flex-start; /* Mover el texto hacia la izquierda */

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 480px) {
    width: 390px;
    left: 124px;
    /* margin: 0 auto; */
  }
`;

const Title = styled.h1`
  font-size: 3.8rem;
  font-family: "Source Code Pro", monospace;
  font-weight: 900;
  color: #303030;
  margin: 0;

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
    font-weight: 900;
  }
`;

const Title_Subtitle = styled.h1`
  font-size: 3.8rem;
  font-family: "Source Code Pro", monospace;
  font-weight: 300;
  color: #303030;
  margin: 0;

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
    font-weight: 300;
    margin-right: 173px;
  }
`;

const Desc = styled.p`
  grid-column: 1;
  display: inline-block;
  align-self: flex-start;
  grid-column: -1/1;
  grid-row: 2;
  position: relative;
  text-align: right;
  background-color: rgb(170, 238, 170);
  padding: 1em 1em;
  /*   */
  width: 100%;
  font-family: "Source Code Pro", monospace;
  @media screen and (max-width: 768px) {
    padding: 12px;
    width: 50%;
    text-align: left;
    left: 163px;
  }

  @media screen and (max-width: 480px) {
    width: 390px;
    padding: 12px;
    width: 75%;
    left: 130px;
    top: 25px;
    margin: 0 auto;
  }

  /* @media screen and (max-width: 480px){
    min-width: 100px;
  } */
`;

const Img = styled.img`
  width: 250px;
  height: 280px;
  grid-area: img;
  position: absolute;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: -50%;
  right: 0;
  margin: auto;
  box-shadow: 0 0 5px #1a120b;

  @media screen and (max-width: 768px) {
    position: relative;
    left: 163px;
    width: 400px;
    height: 500px;
  }
  @media screen and (max-width: 480px) {
    position: relative;
    left: 145px;
    top: 60px;
    width: 370px;
    height: 450px;
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
        <Section2>
          <Left>
            <Title_Subtitle>Hi! I am</Title_Subtitle>
            <Title>Alexander Ramirez</Title>
          </Left>
          <Desc>Web Developer</Desc>
          <Img src="./img/img.webp" />
        </Section2>
      </Container>
    </Section>
  );
};

export default FirstSection;
