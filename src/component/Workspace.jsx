export default function Workspace() {
    return (
        
        <div className="flex flex-col h-screen p-5 gap-5">
            <div className="flex gap-5">
                <h1 className="font-mono text-5xl text-orange-200">WORKSPACES</h1>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-xl">Create Workspace</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-xl">Join Workspace</button>
            </div>

            <hr />

            <div>
                <h1 className="font-mono text-5xl text-orange-200">EXISTING WORKSPACE'S</h1>

            </div>
        </div>
    )
}