import {createContext, useState} from "react";

export const PlayerContext = createContext();

export default function PlayerContextProvider({children}) {
    const [currentSong, setCurrentSong] = useState(null);

    const handleChange = (currentSong) => {
        setCurrentSong(currentSong);
    }

    const player_context = {
        currentSong,
        handleChange,
    }

    return (
        <PlayerContext.Provider value={player_context}>
            {children}
        </PlayerContext.Provider>
    )
}