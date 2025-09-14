import {Routes , Route } from 'react-router-dom'
import './styles/App.css'
import Home from './pages/home'

function App() {


  return (
    <>
     <Routes>
      <Route path='/' element={<Home />} /> 
      <Route path='/about' element={<About />} /> 
      <Route path='/' element={<Home />} /> 
      <Route path='/' element={<Home />} /> 
     </Routes>
    </>
  )
}

export default App
