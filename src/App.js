import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "pierwsza notatka",
      date: "1.05.2022"
    },
    {
      id: nanoid(),
      text: "druga notatka",
      date: "2.05.2022"
    },
    {
      id: nanoid(),
      text: "trzecia notatka",
      date: "3.05.2022"
    },
]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }
  return(
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearchText}/>
        <NotesList 
          notes={notes.filter((note) => 
            note.text.toLowerCase().includes(searchText)//bierze aktualna liste notatek i sprawdza z tekstem z search bar i daje rezultat do NotesList jako prop
          )} 
          handleAddNote={addNote} 
          handleDeleteNote={deleteNote}
        />
      </div>
      <Footer />
    </div>
  )
}

export default App;