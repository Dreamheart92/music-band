import {Outlet, ScrollRestoration} from 'react-router-dom'
import {useEffect} from 'react';
import Header from './Components/Header.jsx'

import {checkForSessionExpiration, storeToken} from './utility/storage.js';
import {getToken} from './api/spotify_api.js';
import {checkIfTokenExist} from './utility/utility.js';
import PlayerContextProvider from './context/PlayerContext.jsx';

function App() {

    useEffect(() => {
        const alreadyHaveToken = checkIfTokenExist();

        if (!alreadyHaveToken) {
            getToken().then(token => {
                storeToken(token);
            })
        }

    }, [])

    useEffect(() => {
        let innerIntervalId;

        function handleSessionExpiration() {
            innerIntervalId = setInterval(function () {
                const intervalId = checkForSessionExpiration(innerIntervalId);
                intervalId.then(isTokenExpired => {
                    if (isTokenExpired) {
                        getToken().then(token => {
                            storeToken(token);
                        })
                        handleSessionExpiration();
                    }
                })
            }, 10000)
        }

        handleSessionExpiration();

        return () => {
            clearInterval(innerIntervalId);
        }
    }, [])

    return (
        <main className="w-full h-full relative">
            <section className='w-full h-full'>
                <Header/>
                <PlayerContextProvider>
                    <Outlet/>
                    <ScrollRestoration/>
                </PlayerContextProvider>
            </section>
        </main>
    )
}

export default App;