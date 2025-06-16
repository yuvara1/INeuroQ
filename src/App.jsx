import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home.jsx';
import Contact from './Contact/Contact.jsx';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
         
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
