import React from 'react'
import { styled } from 'styled-components'


const Section = styled.div`
    display:flex;
    justify-content: center;

    @media only screen and (max-width: 768px) {
        width:100%;
    }
`

const Container = styled.div`
    width: 1000px;
    display: flex;  
    justify-content: space-between;  
    align-items: center;
    padding: 10px 0px;  
    
    @media only screen and (max-width: 768px) {
        width:100%;
        
    }
`

const Links = styled.div`
    display: flex;
    justify-content: center;  
    
`
const List = styled.ul`
    display: flex;
    gap: 20px;
    font-family: 'Josefin Slab', serif;
    font-size: 20px;
    list-style: none;

    @media only screen and (max-width: 768px) {
        padding: 10px;
    }
`
const ListItem = styled.li`
    cursor: pointer;
`
const Title = styled.h3`
    display: flex;
    align-items: center;
    gap: 20px;
    font-family: 'Josefin Slab', serif;
    cursor: pointer;


    @media only screen and (max-width: 768px) {
        width:100%;
        padding: 10px;
    }
`


function Navbar() {
  return (
    <Section>
        <Container>
            <Title>Alexander Ramírez Chiquito</Title>
            <Links>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Projects</ListItem>
                    <ListItem>Contact</ListItem>
                </List>
            </Links>
        </Container>
    </Section>
  )
}

export default Navbar;