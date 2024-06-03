import {useLocation} from "react-router-dom";
import {videos, lives} from "../data/music.js";
import ReactPlayer from "react-player";
import {useEffect, useState} from "react";
import Spinner from "../Components/Spinner.jsx";

export default function Videos() {
    const location = useLocation();

    const [isLoading, setIsLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState([]);

    const data = location.pathname === '/lives' ? lives : videos;

    const totalVideos = data.length;
    const latestVideo = data[0];
    const moreVideos = data.slice(1);

    const handleVideoLoad = () => {
        setLoadedVideos(loadedVideos => [...loadedVideos, 'loaded'])
    }

    useEffect(() => {
        if (loadedVideos.length === totalVideos) {
            setIsLoading(false);
        }
    }, [loadedVideos])


    return (
        <section className='pt-12 lg:pt-36 w-full h-full flex flex-col justify-center items-center bg-zinc-700'>

            {isLoading && <Spinner/>}

            <div
                className={`flex gap-4 items-center w-full h-[300px] lg:w-[900px] lg:h-[450px] ${isLoading ? 'hidden' : null}`}>
                <ReactPlayer
                    onReady={handleVideoLoad}
                    width={'100%'}
                    height={'100%'}
                    url={latestVideo} controls/>
            </div>

            <section className='w-full h-full flex justify-center'>
                <div
                    className={`w-full px-4 lg:px-36 h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-12 lg:mt-24 gap-6 bg-zinc-900 ${isLoading ? 'hidden' : null}`}>
                    {moreVideos.map((video, index) =>
                        <div key={index} className='max-w-[30em] h-[15em] lg:max-w-[40em] lg:h-[20em]'>
                            <ReactPlayer
                                onReady={handleVideoLoad}
                                width={'100%'}
                                height={'100%'}
                                controls
                                url={video}/>
                        </div>
                    )}
                </div>
            </section>
        </section>
    )
}