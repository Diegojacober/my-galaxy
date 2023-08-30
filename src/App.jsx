import RoutesApp from './routes/index'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles/GlobalStyles'
import Header from './components/Header'

function App() {
  return (
    <>
      <BrowserRouter>
      <GlobalStyle />
      <Header/>
        <RoutesApp />
      </BrowserRouter>
    </>

  )
}

export default App
