export default function Card({ data }) {
    return (
        <section>
            <div className="w-[20em] h-[30em]">
                <img className='w-full h-full rounded-sm object-cover' src={data.image_url} alt="" />
            </div>

            <div className="flex flex-col w-full items-center mt-4">
                <h1>{data.name}</h1>
                <p>{data.instrument}</p>
            </div>
        </section>
    )
}