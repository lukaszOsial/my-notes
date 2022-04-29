import {MdDeleteForever} from 'react-icons/md';

const Note = () => {
    return(
        <div className="note">
            <span>pierwsza notatka</span>
            <div className="note-footer">
                <small>27/04/2022</small>
                <MdDeleteForever className='delete-icon' size='1.3em'/>
            </div>
        </div>
    )
}

export default Note;