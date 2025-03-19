import { createRoot } from 'react-dom/client'
import './index.scss'
import Layout from './Layout.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home/Home.tsx'
import About from './views/About/About.tsx'
import Projects from './views/Projects/Projects.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path='*' element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
