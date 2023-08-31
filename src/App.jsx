import RoutesApp from './routes/index'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle, { Container } from './styles/GlobalStyles'
import Header from './components/Header'

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>

      <ToastContainer autoClose={3000} />

      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Container>
          <RoutesApp />
        </Container>
      </BrowserRouter>
    </>

  )
}

export default App
