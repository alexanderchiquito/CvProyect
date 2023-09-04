import { useState } from "react";
import { styled } from "styled-components";

const data = [
  {
    id: 2,
    name: "Projects",
    url: "https://github.com/alexanderchiquito",
  },
  {
    id: 3,
    name: "Contact",
    url: "https://www.linkedin.com/in/alexander-ramirez-chiquito-92a23a280/",
  },
];

const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #f0f0f0;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    padding-left: 20px;
  }

  @media screen and (max-width: 768px) {
    padding-left: 20px;
    padding-right: 10px;
  }

  @media screen and (max-width: 390px) {
    body {
      width: 390px;
      background-color: blue;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
`;
const List = styled.ul`
  display: flex;
  gap: 20px;
  font-family: "Josefin Slab", serif;
  font-size: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    padding: 10px;
  }
`;
const ListItem = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #111111;
`;

const Title = styled.h3`
  display: flex;
  align-items: center;
  gap: 20px;
  font-family: "Source Code Pro", monospace;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

function Navbar() {
  const [change, setChange] = useState("Home");
  return (
    <Section>
      <Container>
        <Title>Alex | dev</Title>
        <Links>
          <List>
            {data.map((item) => (
              <ListItem
                key={item.id}
                text={item.name}
                onClick={() => setChange(item)}
                href={item.url}
                target="_blank"
              >
                {item.name}
              </ListItem>
            ))}
          </List>
        </Links>
      </Container>
    </Section>
  );
}

export default Navbar;
