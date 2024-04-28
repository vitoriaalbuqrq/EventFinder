import theme from './theme'
import { ThemeProvider } from 'styled-components'
import Navbar from './components/Navbar/Navbar'
import { GlobalStyle } from './GlobalStyle'
import { Wrapper } from './Wrapper'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Navbar />
        <Header />
        <Outlet />
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
