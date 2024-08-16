import Header from "./component/Header"
import Home from "./component/Home"
import Workspace from "./component/Workspace"

function App() {

  return (
    <>
      <Header></Header>
      <div className="h-screen bg-gray-800">
        {/* <Home></Home> */}
        <Workspace></Workspace>

        
      </div>
    </>
  )
}

export default App
