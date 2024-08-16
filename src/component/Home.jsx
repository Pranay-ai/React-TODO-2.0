export default function Home() {
    return (
        <div className="flex flex-col h-screen justify-center items-center">
            <div className="text-center">
                <h1 className="text-7xl text-slate-50 font-bold">Welcome to Task Zen</h1>
                <p className="text-xl text-orange-200 mt-4">Stay Organized, Stay Zen with Task Zen: Your Ultimate To-Do List App</p>
            </div>
            <div className="flex">
                <div className="flex  gap-4 mt-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-xl">Get Started</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-xl">Learn More</button>
                </div>
            </div>
        </div>
    )
}