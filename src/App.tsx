import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AboutPage } from './pages/About'
import { ClientsPage } from './pages/Clients'
import { ContactPage } from './pages/Contact'
import { HomePage } from './pages/Home'
import { ServicesPage } from './pages/Services'
import { TeamPage } from './pages/Team'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="clients" element={<ClientsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
