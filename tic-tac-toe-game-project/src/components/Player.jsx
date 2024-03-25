import { useState } from "react";

function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(editing => !editing);
        if (isEditing) {
            onChangeName(symbol, playerName);
        };
    };

    const handleChange = (event) => {
        setPlayerName(event.target.value)
    };

    let editablePlayerName;
    editablePlayerName = isEditing ? <input type="text" required placeholder="name" value={playerName} onChange={handleChange} /> : <span className="player-name">{playerName}</span>

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
};

export default Player;