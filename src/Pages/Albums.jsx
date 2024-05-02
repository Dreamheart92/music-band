import {music} from "../data/music.js";

import Carousel from "../Components/Carousel.jsx";
import {useState} from "react";
import Album from "./Album.jsx";

export default function Albums() {
    const [activeAlbum, setActiveAlbum] = useState(0);

    const handleSlide = (album) => {
        setActiveAlbum(album);
    }

    return (
        <section className="pt-40 w-full h-full flex flex-col items-center justify-center">
            <Carousel
                albums={music.albums}
                activeIndex={activeAlbum}
                onHandleSlide={handleSlide}
            />

            <div>
                <Album album={music.albums[activeAlbum]}/>
            </div>
        </section>
    )
}