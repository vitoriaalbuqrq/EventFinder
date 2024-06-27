import theme from './theme'
import { ThemeProvider } from 'styled-components'
import Navbar from './components/Navbar/Navbar'
import { GlobalStyle } from './GlobalStyle'
import { Wrapper } from './Wrapper'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const notify = () => toast("Wow so easy!");
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Navbar />
        <ToastContainer />
        <Outlet />
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
