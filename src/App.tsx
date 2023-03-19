import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import HeadLineCards from "./components/HeadLineCards"
import MenuItems from "./components/MenuItems"
import Category from "./components/Category"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <HeadLineCards/>
      <MenuItems />
      <Category />
      <Footer />
    </div>
  )
}

export default App
