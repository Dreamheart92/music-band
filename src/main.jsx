import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Music from './Pages/Music.jsx';
import Single from './Pages/Single.jsx';
import Albums from './Pages/Albums.jsx';
import Album from './Pages/Album.jsx';
import Videos from './Pages/Videos.jsx';

import {loader as singleLoader} from './Pages/Single.jsx';
import Events from "./Components/Events.jsx";
// import {loader as albumLoader} from './Pages/Album.jsx'

const router = createBrowserRouter([
    {
        element: <App/>,
        path: '/',
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'about',
                element: <About/>
            },
            {
                path: '/music/singles',
                element: <Music/>
            },
            {
                path: '/music/singles/:name',
                element: <Single/>,
                loader: singleLoader
            },
            {
                path: '/music/albums',
                element: <Albums/>
            },
            {
                path: '/music/albums/:name',
                element: <Album/>,
                // loader: albumLoader
            },
            {
                path: 'videos',
                element: <Videos/>
            },
            {
                path: 'lives',
                element: <Videos/>
            },
            {
                path: 'tour',
                element: <Events/>
            }
        ]
    }
], {basename: '/sevi-band/'})

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)