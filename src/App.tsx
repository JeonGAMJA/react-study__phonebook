import { useState } from 'react'
import './App.css'
import Nav from './components/Nav/Nav'
import SearchBar from './components/SearchBar/SearchBar'
import ContactList from './pages/ContactList/ContactList'
import NewContact from './pages/NewContact/NewContact'

function App() {
  const [addContactModalOpen, setAddContactModalOpen] = useState(false)

  const handleAddContactButton = () => {
    setAddContactModalOpen(true)
  }

  return (
    <div>
      {addContactModalOpen && (
        <NewContact setAddContactModalOpen={setAddContactModalOpen} />
      )}
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
