import React from 'react';

const Header = ({ handleToggleDarkMode }) => {

    return (
        <div className="header">
            <h1>Moje notatki</h1>
            <label className='toggle' for='myToggle'>
                <p>Tryb ciemny</p>
                <input className='toggle-input' type="checkbox" id='myToggle' onClick={() => 
                    handleToggleDarkMode(
                        (previousDarkMode) => !previousDarkMode
                    )
                }/>
                <div className='toggle-fill'></div>
            </label>
        </div>
    )
}

export default Header;