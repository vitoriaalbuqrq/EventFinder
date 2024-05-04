import theme from './theme'
import { ThemeProvider } from 'styled-components'
import Navbar from './components/Navbar/Navbar'
import { GlobalStyle } from './GlobalStyle'
import { Wrapper } from './Wrapper'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Navbar />
        <Outlet />
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
