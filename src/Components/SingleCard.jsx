import {Link} from "react-router-dom";

export default function SingleCard({data}) {
    return (
        <section className='w-full h-full'>
            <Link
                className='w-full h-full flex flex-col justify-center items-center gap-4'
                to={`/music/singles/${data.name.toLowerCase()}`}>

                <div>
                    <img src={data.image_url} alt=""/>
                </div>

                <div>
                    <h1 className='font-mono text-2xl'>{data.name}</h1>
                </div>

            </Link>
        </section>
    )
}