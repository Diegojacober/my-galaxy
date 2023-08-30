import RoutesApp from './routes/index'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles/GlobalStyles'

function App() {
  return (
    <>
      <BrowserRouter>
      <GlobalStyle />
        <RoutesApp />
      </BrowserRouter>
    </>

  )
}

export default App
