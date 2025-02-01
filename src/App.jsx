import Footer from "./Components/Layout/Footer"
import NavBar from "./Components/Layout/NavBar"
import HomePage from "./Components/pages/home"

const App = () => {
  return (
    <div className="bg-black">
      <NavBar/>
      <HomePage/>
      <Footer/>
    </div>
  )
}

export default App