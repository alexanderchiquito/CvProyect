import React, { useState } from 'react';
import { styled } from 'styled-components';
import WebDesing from './WebDesing';
import Development from './Development';


const data =[
  'Web Desing',
  'Development',

];

const Section = styled.div`
  height:100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  width:1000px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px){
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px){
    padding: 20px;
    justify-content: center;
  }
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  
`;
const ListItem = styled.li`
  font-size: 75px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 40px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  &:after{
    content: "${(props)=>props.text}";
    position: absolute;
    top:0;
    left:0;
    color: pink;
    width:0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover{
    &:after{
      animation: moveText 0.5s linear both;
      @keyframes moveText {
        to{
          width: 100%;
        } 
      }
    }
  }
`;

const Right = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  margin-left: 100px;
`

const Proyects = () => {
  const [work, setWork] = useState('Web Desing');
  return (
    <Section>
        <Container>
           <Left>
              <List>
                {data.map((item)=>(
                  <ListItem key={item} text={item} onClick={()=>setWork(item)} >
                    {item}
                  </ListItem>
                ))}
              </List>
           </Left>
           <Right>
                {work === 'Web Desing' ? (
                <WebDesing/>
                ): (
                <Development/>
                )  }
           </Right>
        </Container>
    </Section>
  )
}

export default Proyects