import { Outlet, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import ContactList from './pages/ContactList'
import ContactDetail from './pages/ContactDetail'
import EditContact from './pages/EditContact'

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ContactList />} />
          <Route path=":contactId" element={<ContactDetail />} />
          <Route path=":contactId/edit" element={<EditContact />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
