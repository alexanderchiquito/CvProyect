import FirstSection from './components/FirstSection'
import SecondSection from './components/SecondSection'
import Proyects from './components/Proyects'
import Contacts from './components/Contacts'
import styled from 'styled-components'

const Container = styled.div`
  height:100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y:auto;
  scrollbar-width:none;
  background-size: cover;
  &::-webkit-scrollbar{
    display:none;
  }
`

function App() {
  return (
    <Container>
      <FirstSection/>
      <SecondSection/>
      <Proyects/>
      <Contacts/>
    </Container>
  )
}

export default App
