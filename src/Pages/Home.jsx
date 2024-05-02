import Hero from "../Components/Hero.jsx";
import NewAlbum from "../Components/NewAlbum.jsx";
import NewVideo from "../Components/NewVideo.jsx";
import Events from "../Components/Events.jsx";

import eventBackground from "../assets/eventBackground.webp";

export default function Home() {
    return (
        <section className='w-full h-full'>
            <Hero/>
            <NewVideo/>
            <NewAlbum/>
            <Events/>
        </section>
    )
}