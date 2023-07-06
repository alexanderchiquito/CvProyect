import { useRef , useState } from "react";
import emailjs from '@emailjs/browser';
import { styled } from 'styled-components';
import SocialMedia from "./SocialMedia";

const Section = styled.div`
  height:100vh;
  scroll-snap-align: center;
`
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 768px){
    justify-content: center;
  }

`
const Title = styled.h1`
  font-weight:200;
  font-family: 'Concert One', cursive;
`
const Form = styled.form`
  --bg-light: #efefef;
  --bg-dark: #707070;
  --clr: #58BC82;
  --clr-alpha: #9c9c9c60;
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media only screen and (max-width: 768px){
    width:300px;
  }
`
const Input = styled.input`
  padding: 20px;
  border: none;
  border-radius:0.5rem;
  box-shadow: 0 0 5px rgba(214, 194, 194, 0.2);
  font-family: 'Concert One', cursive;
  background-color: var(--clr-apha);
  color: var(--bg-light);

  &:focus{
    outline: 2px solid var(--clr);
  }

`
const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius:15px;
  font-family: 'Concert One', cursive;
  box-shadow: 0 0 5px rgba(214, 194, 194, 0.2);
  background-color: var(--clr-apha);
  color: var(--bg-light);


  &:focus{
    outline: 2px solid var(--clr);
  }

`
const Span = styled.span`
  width: 140px;
  height: auto;
  position: relative;
  background: transparent;
  color: white;
  font-family: 'Concert One', cursive;
  border-radius: 4px;
  float: left;
  padding: 0.7em 1em;
  padding-left: 0.9em;
  display: block;  
  align-items: center;
  border: none;
  overflow: hidden;
  cursor: pointer;
  transition: .5s linear;

  ::before{
    position: absolute;
    content:'';
    left:0;
    bottom: 0;
    height:4px;
    width:100%;
    border-bottom: 4px solid transparent;
    border-left: 4px solid transparent;
    box-sizing: border-box;
    transform: translateX(100%);
  }

  ::after{
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    border-top: 4px solid transparent;
    border-right: 4px solid transparent;
    box-sizing: border-box;
    transform: translateX(-100%);
  }

  &:hover{
    box-shadow: 0 5px 15px rgba(200, 233, 112, 0.5);
  }

`;

const Button = styled.button`
  color: black;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;
`;

const Right = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  justify-content: center;  

  @media only screen and (max-width: 768px){
    display: none;
  }

`;


const Contacts = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  
  const handleSubmit = (e) =>{
    e.preventDefault()
    emailjs.sendForm('service_7me7r4d', 'template_ihh2f03', ref.current, 'AVImKT4FTaRAZu-jf')
    .then((result) => {
        console.log(result.text);
        setSuccess(true);
    }, (error) => {
        console.log(error.text);
        setSuccess(false);
    });
  }
  return (
    <Section>
        <Container>
            <Left>
              <Form ref={ref} onSubmit={handleSubmit} >
                <Title>Contact me</Title>
                <Input placeholder='Name' name='name'  />
                <Input placeholder='Correo@gamil.com' name='email'  />
                <TextArea placeholder='Write a Message' rows={10} name='message' />
                <Button type='submit' ><Span>Send</Span></Button>
                {success && "You message has been. We'll get back to you soon :)"}
              </Form>
            </Left>
            <Right>
              <SocialMedia/>
            </Right>
        </Container>
    </Section>
  )
}

export default Contacts;