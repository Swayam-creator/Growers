import AboutCompany from "./components/About"
import ChooseUs from "./components/ChooseUs"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import OurGallery from "./components/Ourgallery"
import Products from "./components/Products"
function App() {


  return (
    <>
      <div>
         <Navbar/>
         <Hero/>
         <AboutCompany/>
         <ChooseUs/>
         <Products/>
         <OurGallery/>
         <Footer/>
      </div>
    </>
  )
}

export default App
