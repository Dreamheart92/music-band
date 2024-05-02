import {data} from "../data/data.js";
import {useLocation} from "react-router-dom";

export default function Events() {
    const location = useLocation();

    let containerStyle = `w-full h-screen flex flex-col items-center justify-center py-12`;

    containerStyle += location.pathname === '/tour' ? ' pt-48' : ' pt-24'


    return (
        <section id='event' className={containerStyle}>

            <h1 className="w-full mb-12 font-mono text-5xl text-center">SHOW DATES</h1>

            <table className="w-[70%] h-full">
                <tbody className="text-left">
                {data.events.map(event => (
                    <tr
                        className="cursor-pointer font-mono text-[1.2em] border-b-[.05em] border-stone-700"
                        key={event.event}>
                        <td className='px-2 py-5'>{event.date}</td>
                        <td>{event.event}</td>
                        <td>
                            <p>{`${event.city}, ${event.country}`}</p>
                        </td>
                        <td>{event.tickets ? 'TICKETS' : null}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </section>
    )
}

/*
* import {data} from "../data/data.js";

export default function Events() {
    return (
        <section id='event' className='w-full h-full pt-12 flex flex-col items-center py-12'>

            <h1 className="w-[90%] mb-12 font-mono text-5xl">EVENTS</h1>

            <table className="w-[90%] h-full">
                <tbody className="text-left">
                {data.events.map(event => (
                    <tr
                        className="cursor-pointer font-mono text-2xl even:bg-stone-900
                         odd:bg-transparent"
                        key={event.event}>
                        <td className='px-2 py-5'>{event.date}</td>
                        <td>
                            <p>{`${event.city}, ${event.country}`}</p>
                            <p className='text-sm'>{event.event}</p>
                        </td>
                        <td>{event.tickets ? 'TICKETS' : null}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </section>
    )
}
* */