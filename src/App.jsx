 import { Routes, Route } from "react-router-dom";
 import Calculate from './Components/Calculate.jsx'
 import Home from './Components/Home.jsx'
 import Navigate from './Navigate.jsx'


function App() {
  return (
    <div>
         <Navigate />

          <Routes>
            <Route path='/Home' element = {<Home />} />
            <Route path='/Calculate' element = {<Calculate />} />
          </Routes>

    </div>
  )
}

export default App