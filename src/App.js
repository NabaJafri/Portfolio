import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills'
import Project from './components/Project'
import Footer from './components/Footer'
import Contact from './components/ContactForm'
import 'bootstrap/dist/css/bootstrap.min.css'
import react, {useEffect} from 'react';

function App() {
  useEffect(()=>{
    fetch("/api")
    .then((res)=> res.json())
    .then((data)=>{console.log(data)})
  },[])
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
