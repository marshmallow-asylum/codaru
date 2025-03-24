export default function Homepage ({ team, image, link, tagline, members }: { team: string, image: string, link: string, tagline: string, members: string[] }) {
    return (
        <>
            <div className="h-vh w-vw relative md:flex flex-row text-center md:text-left justify-center items-center align-middle m-10">
                <img className="rounded-lg mx-8" src={image} width="400" height="400" alt="" />
                <div className="hidden md:inline-block h-vh min-h-[1em] w-0.5 self-stretch bg-[#1b1d21] mx-20"></div>
                <div className="my-10 flex flex-col justify-center">
                    <a href={link}>
                        <h1 className="font-[league spartan] text-5xl font-bold">team {team}.</h1>
                    </a>
                    <p>{tagline}</p>
                    <div className="md:-left-12 mt-8 relative flex flex-wrap w-full justify-center md:justify-start items-center align-middle">
                        {members.map((b) => (
                                <div key={Math.random()} className="md:w-20 m-4">
                                    <div className="inline-flex flex-col text-center items-center w-30">
                                        <img src={image} width="50"/>
                                        <h2 className="">{b}</h2>
                                    </div>
                                </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
