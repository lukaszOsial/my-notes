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
  return(
    <div className="container">
      <NotesList notes={notes} />
    </div>
  )
}

export default App;