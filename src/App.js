import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "tekst pierwszej notatki",
      date: "02/05/2022"
    },
    {
      id: nanoid(),
      text: "tekst drugiej notatki",
      date: "01/05/2022"
    },
    {
      id: nanoid(),
      text: "tekst trzeciej notatki",
      date: "03/05/2022"
    },
]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid,
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
    <div className="container">
      <NotesList 
        notes={notes} 
        handleAddNote={addNote} 
        handleDeleteNote={deleteNote}
      />
    </div>
  )
}

export default App;