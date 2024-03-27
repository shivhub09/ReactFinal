import './App.css'
import MyComponent from './MyComponent'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import SliderContainer from './components/SliderContainer/SliderContainer'

function App() {
  return (
    <>
      {/* <h1>This is gonna be the website finally . . . </h1> */}
      <Navbar></Navbar>
      {/* <MyComponent></MyComponent> */}
      <SliderContainer></SliderContainer>
      <Footer></Footer>
    </>
  )
}

export default App
