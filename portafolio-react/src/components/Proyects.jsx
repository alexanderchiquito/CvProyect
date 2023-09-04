import { styled } from "styled-components";

const Section = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #f0f0f0;

  @media screen and (max-width: 768px) {
    height: 320vh;
  }

  @media only screen and (max-width: 480px) {
    height: 250vh;
  }
`;

const Container = styled.div`
  position: relative;
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }

`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    margin-bottom: 100px;
    justify-content: center;
  }

`;

const Title = styled.h2`
  font-family: "Source Code Pro", monospace;
  font-size: 3rem;
`;

const ContainerImg = styled.div`
  top: 50px;
  position: absolute
`;

const Imagene = styled.img`
  width: 150px;
`;

const Right = styled.div`
  flex: 2;
  display: flex;
  gap: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 50px;
    margin-left: 10px;
  }

`;

const Card = styled.div`
  width: 200px;
  height: 300px;
  background-color: #F4EEEE;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out, border-bottom-color 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    border-bottom: 3px solid rgb(170, 238, 170); /* Añade el borde en la parte inferior */
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
`;

const CardTitle = styled.a`
  font-size: 1.2rem;
  font-family: "Source Code Pro", monospace;
  text-decoration: none;
  padding: 10px;
  color: #111111;
`;


const Proyects = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Title>My Work</Title>
          <ContainerImg><Imagene src="./dddoodle-pack/lines/line-2.svg" /></ContainerImg>
        </Left>
        <Right>
          <Card>
            <CardImage src="./img/img1.png" alt="Proyecto 1" />
            <CardTitle href="https://main--famous-starship-bd1458.netlify.app/" target="_blank" >Legends click</CardTitle>
          </Card>
          <Card>
            <CardImage src="./img/img2.png" alt="Proyecto 2" />
            <CardTitle href="https://main--wondrous-scone-1a4e39.netlify.app/" target="_blank" >Pokemon click</CardTitle>
          </Card>
          <Card>
            <CardImage src="./img/usersCrud.png" alt="Proyecto 3" />
            <CardTitle href="https://github.com/alexanderchiquito/crud-redux-v2" target="_blank" >C-R-U-D click</CardTitle>
          </Card>
          <Card>
            <CardImage src="./img/admin.png" alt="Proyecto 4" />
            <CardTitle href="https://main--jolly-blini-fc5153.netlify.app/" target="_blank" >Admin UI click</CardTitle>
          </Card>
          <Card>
            <CardImage src="./img/git_hub.png" alt="Proyecto 5" />
            <CardTitle href="https://github.com/alexanderchiquito" target="_blank" >Github click</CardTitle>
          </Card>
        </Right>
      </Container>
    </Section>
  );
};

export default Proyects;
