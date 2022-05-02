import { useState } from "react";

const AddNote = () => {
    const [noteText, setNoteText] = useState('');
    const handleChange = (event) => {
       setNoteText(event.target.value);
    }
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
                <small>Pozostało znaków: 150</small>
                <button className="save">Zapisz</button>
            </div>
        </div>
    )
}

export default AddNote;