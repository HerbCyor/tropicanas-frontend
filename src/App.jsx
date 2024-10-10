import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import { Container } from 'react-bootstrap'
import { Navbar } from './components/Navbar'
function App() {

  return (
    <>
      <Navbar>
        <Container className='mb-4'>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </Container>
      </Navbar>
    </>
  )
}

export default App
