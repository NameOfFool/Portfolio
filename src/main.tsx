import { createRoot } from 'react-dom/client'
import './index.scss'
import Layout from './Layout.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home.tsx'
import About from './components/About/About.tsx'
import Contacts from './components/Contacts/Contacts.tsx'
import Projects from './components/Projects/Projects.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path='*' element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
