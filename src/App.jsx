import {Header} from "./components/Header";
import {Moves} from "./components/Moves";

function App() {

  return (
    <div className="App h-full flex flex-col justify-around">
       <Header score={12} />
        <Moves />
    </div>
  )
}

export default App
