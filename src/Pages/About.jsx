import {data} from "../data/data.js";

import Card from "../Components/Card.jsx";

export default function About() {
    return (
        <section id='about-us' className='pt-36 w-full h-full bg-zinc-800'>

            <section className="flex flex-col gap-4 justify-center">
                <div className='ml-[18.5em]'>
                    <h1 className='font-mono text-4xl'>BAND</h1>
                </div>
                <div className='flex gap-4 justify-center'>
                    {data.band.members.map(member => <Card key={member.name} data={member}/>)}
                </div>
            </section>

            <section className="w-full h-full flex flex-col items-center mt-24 bg-zinc-900 py-12">
                <section className="w-[70%]">
                    <h1 className='mb-4 font-mono text-4xl'>BIOGRAPHY</h1>

                    <div className="flex flex-col gap-4">
                        {data.band.biography.map((chunk, index) => <p key={index} className="text-[1.1em]">{chunk}</p>)}
                    </div>
                </section>
            </section>
        </section>
    )
}