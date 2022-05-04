import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');

    const characterLimit = 150;
    
    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >= 0) {//jesli limit znaków będzie większy lub równy zero będzie można pisać dalej
            setNoteText(event.target.value);
        } 
    };

    const handleSaveClick = () => {
        if(noteText.trim().length > 0){ //jesli notatka zawiera znaki zostanie utworzona 
            handleAddNote(noteText); // dodanie wpisanego tekstu
            setNoteText('');    // zeruje tekst ostatnio wpisywanej notatki w narzędziu wpisywania nowej notatki
        }
    };

    return(
        <div className="note new">
            <textarea 
                rows="9" 
                cols="10" 
                placeholder="Utwórz notatkę..."
                value={noteText}
                onChange={handleChange}
            ></textarea>
            <div className="note-footer">
                <small>Pozostało znaków: {characterLimit - noteText.length}</small>
                <button className="save" onClick={handleSaveClick}>Zapisz</button>
            </div>
        </div>
    )
}

export default AddNote;