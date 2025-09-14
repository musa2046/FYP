import {Routes , Route , Link} from 'react-router-dom'
import './styles/App.css'
import  Navbar  from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Constitution from './pages/Constitution.jsx'
import Contact from './pages/Contact.jsx'
import Executive from './pages/Executive.jsx'
import MemberList from './pages/MemberList.jsx'
import Membership from './pages/Membership.jsx'
import News from './pages/News.jsx'
import Programs from './pages/Programs.jsx'
function App() {


  return (
    <>
     <Navbar />
   
     <Routes>
      <Route path='/' element={<Home />} /> 
      <Route path='/about' element={<About />} /> 
      <Route path='/constitution' element={<Constitution />} /> 
      <Route path='/contact' element={<Contact />} /> 
      <Route path='/executive' element={<Executive />} /> 
      <Route path='/memberList' element={<MemberList />} /> 
      <Route path='/membership' element={<Membership />} /> 
      <Route path='/news' element={<News />} /> 
      <Route path='/programs' element={<Programs />} /> 
     </Routes>
    </>
  )
}

export default App
