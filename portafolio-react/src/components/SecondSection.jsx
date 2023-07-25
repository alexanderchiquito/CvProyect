import { styled } from 'styled-components';
import React from 'react';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`

const Container = styled.div`
  height:100vh;
  scroll-snap-align: center;
  width:900px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Left = styled.div`
  flex: 1;
  
  `;
const Title = styled.h1`
  font-size: 40px;
  align-items: center;
  margin-top: 150px;
  font-family: 'Concert One', cursive;
  @media only screen and(max-width: 768px) {
    font-size: 30px;
  }
`

const Right = styled.div`
  flex:1;
  display: flex;

  @media screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }

`;

const ImgA = styled.img`
    width: 100%;
    height:100px;
    object-fit: cover;
`

const DivItems = styled.div`
  position: relative;
  overflow: hidden;


  ::before,
  ::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 50px;
    pointer-events: none;
  }

  ::before {
    left: 0;
  }

  ::after {
    right: 0;
  }
`;

const DivItemsContent = styled.div`
  display: flex;
  gap: 200px;
  animation: slide ${({ duration }) => duration}s linear infinite;
  transform: ${({ direction }) => `translateX(${direction === 'right' ? '-100%' : '200px'})`};

  @keyframes slide {
    0% {
      transform: ${({ direction }) => (direction === 'right' ? 'translateX(-25%)' : 'translateX(-100%)')};
    }
    50% {
      transform: ${({ direction }) => (direction === 'left' ? 'translateX(-50%)' : 'translateX(500px)')};
    }
    100% {
      transform: ${({ direction }) => (direction === 'right' ? 'translateX(-25%)' : 'translateX(200px)')};
    }
  } 

  @media screen and (max-width: 768px) {
    gap: 150px;
  }

  @media screen and (max-width: 480px) {
    gap: 100px;
  }

`;

const DivItem = styled.div`
  width: 100px;
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

const ImageTitle = styled.span`
  position: absolute;
  bottom: -50px;
  left: 0;
  right: 0;
  padding: 2px;
  background-color: rgb(192, 238, 228);
  color: #111111;
  border-radius: 5px;
  font-size: 15px;
  font-family: 'Concert One', cursive;
  text-align: center; 
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.3s ease;

  ${DivItem}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;
  

const SecondSection = () => {

  const images = [
    {
      src: './img/html.png',
      name: 'HTML',
    },
    {
      src: './img/css.png',
      name: 'CSS',
    },
    {
      src: './img/javAs.png',
      name: 'JavaScript',
    },
    {
      src: './img/react_img.png',
      name: 'React/React-Native'
    },
    {
      src: './img/postman_img.png',
      name: 'Postman'
    },
    {
      src: './img/mysql_img.png',
      name: 'MySQL',
    },
    {
      src: './img/node.png',
      name: 'Node Js',
    },
  ];

  const imageCount = images.length;
  const duration = 25;
  const [direction, setDirection] = React.useState('right');

  const handleAnimationEnd = () => {
    setDirection((prevDirection) => (prevDirection === 'right' ? 'left' : 'right'));
  };


  return (
    <Section>
        <Container>
           <Left>
            <Title>Technology Stack.</Title>
           </Left>
           <Right>
              <DivItems>
                <DivItemsContent direction={direction} duration={duration} onAnimationEnd={handleAnimationEnd} >
                    {images.map((images, index)=>(
                      <DivItem key={index}>
                        <ImgA src={images.src} alt='' />
                        <ImageTitle>{images.name}</ImageTitle>
                      </DivItem>
                    ))}
                </DivItemsContent>
              </DivItems>
           </Right>
        </Container>
    </Section>
  )
}

export default SecondSection;