import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './Layout';
import Home from './Home'
import Destination from './Destination'
import About from './About'
import Contact from './Contact'
import RegnForm from './RegnForm'
import SubForm from './SubForm'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="Destination" element={<Destination/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="RegnForm" element={<RegnForm/>}/>
        <Route path="SubForm" element={<SubForm/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
