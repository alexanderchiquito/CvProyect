import React from 'react'
import { styled } from 'styled-components'

const Section = styled.div`
  justify-content: center;
  background: #111111;
  text-align: center;
  overflow: hidden;
  box-shadow: 0 0 10px #fff;
  padding: 4px;
  transition: box-shadow 0.3s ease;

  &:hover{
    box-shadow: 0px 4px 8px rgba(247, 50, 230, 0.5),
    0px 6px 20px 0px rgba(243, 243, 243, 0.5)
  }
  
`;

const Container = styled.div`
  align-items: center;
  margin-bottom: 20px;
`


const Title = styled.h4`
  font-family: 'Concert One', cursive;
  font-size: 20px;
  text-shadow: 0 0 10px #000;
`;

const Img = styled.img`
  height: 200px;
  transition: transform 0.3s ease;
  /* border: 2px solid #fff; Development */
  border-radius: 4px;

  &:hover{
    transform: scale(1.2);
  }
`


const Despcription = styled.p`
  font-family: 'Josefin Slab', serif;
  font-size: 20px;
`;

const Button = styled.a`
  --bg: #C0EEE4;
  --hover-bg: #ff90e8;
  --hover-text: #000;
  font-family: 'Concert one', cursive;
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


function Development() {
  return (
    <Section>
      <Img src='./img/img2.png' alt='' />
        <Container>
          <Title>Pokemon Api</Title>
          <Despcription>Web aplication, developed with React, css, where users can view information related to Pokemons and stack</Despcription>
          <Button>Click</Button>       
        </Container>
    </Section>
  )
}

export default Development