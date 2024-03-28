import './App.css'
import MyComponent from './MyComponent'
import AboutUs from './components/AboutUs/AboutUs'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'
import SliderContainer from './components/SliderContainer/SliderContainer'

function App() {
  return (
    <>
      {/* <h1>This is gonna be the website finally . . . </h1> */}
      <Navbar></Navbar>
      {/* <MyComponent></MyComponent> */}
      <SliderContainer></SliderContainer>
     <AboutUs></AboutUs>
      <Services></Services>
      <FAQ></FAQ>
      <Footer></Footer>
    </>
  )
}

export default App
