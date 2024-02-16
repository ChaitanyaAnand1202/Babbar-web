import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Support from "./components/Support"
import About from "./components/About"
import Labs from "./components/Labs"
import NotFound from "./components/NotFound"
import { NavLink } from "react-router-dom"
import MainHeader from "./components/MainHeader"


function App() {



  return (

    <div>

      <nav>
        <ul>
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/support">
            <li>Support</li>
          </NavLink>
          <NavLink to="/about">
            <li>About Us</li>
          </NavLink>
          <NavLink to="/labs">
            <li>Labs</li>
          </NavLink>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<MainHeader />}>
          <Route index element={<Home />}/>
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="*" element={<NotFound />} />
        </Route>

      </Routes>
    </div>



  )
}

export default App
