import React, { useState } from 'react'
import { styled } from 'styled-components'


const data = [
    {
        id: 2,
        name: "Projects",
        url: 'https://github.com/alexanderchiquito'
    },
    {
        id: 3,
        name: "Contact",
        url: 'https://www.linkedin.com/in/alexander-ramirez-chiquito-92a23a280/'
    }
]


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
const ListItem = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: #fff;
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
    const [change, setChange] = useState('Home')
  return (
    <Section>
        <Container>
            <Title>Alexander Ramírez Chiquito</Title>
            <Links>
                <List>
                    {data.map((item)=>(
                        <ListItem key={item.id} text={item.name} onClick={()=> setChange(item)} href={item.url} target='_blank' >
                              {item.name}
                        </ListItem>
                    ))}
                </List>
            </Links>
        </Container>
    </Section>
  )
}

export default Navbar;