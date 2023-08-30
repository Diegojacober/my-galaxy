import RoutesApp from './routes/index'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle, { Container } from './styles/GlobalStyles'
import Header from './components/Header'

function App() {
  return (
    <>
      <BrowserRouter>
      <GlobalStyle />
      <Header/>
        <Container>
          <RoutesApp/>
        </Container>
      </BrowserRouter>
    </>

  )
}

export default App
