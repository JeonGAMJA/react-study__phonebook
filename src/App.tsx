import { ReactHTMLElement, useRef, useState } from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import SearchBar from './components/SearchBar/SearchBar'
import ContactList from './pages/ContactList/ContactList'
import NewContact from './pages/NewContact/NewContact'

function App() {
  const [addContactModalOpen, setAddContactModalOpen] = useState(false)
  const modalBackground = useRef()

  const handleAddContactButton = () => {
    setAddContactModalOpen(true)
  }

  const handleCloseModal = (e: React.MouseEvent) => {
    if (e.target === modalBackground.current) {
      setAddContactModalOpen(false)
    }
  }

  return (
    <div>
      {addContactModalOpen && <NewContact ref={modalBackground} />}
      <Nav
        prevButtonText="&larr;"
        buttonText="+"
        onButtonClick={handleAddContactButton}
      />
      <SearchBar />
      <ContactList />
    </div>
  )
}

export default App
