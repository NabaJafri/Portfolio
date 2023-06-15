import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState , useEffect} from 'react';
import navicon_1 from '../assets/img/nav-icon1.svg'
import navicon_2 from '../assets/img/nav-icon2.svg'
import navicon_3 from '../assets/img/nav-icon3.svg'

export const NavBar = () => {
    const[activeLink,setActiveLink]= useState('home')
    const[scrolled,setScrolled]=useState(false)

    useEffect(()=>{
      const onScroll = () =>{
        if(window.scrollY>50)
        {
          setScrolled(true)
        }
        else
        {
          setScrolled(false)
        }
      }

      window.addEventListener("scroll",onScroll);

      return ()=> window.removeEventListener("scroll",onScroll)
    },[])

    const onUpdateActiveLink =(value)=>{
      setActiveLink(value);
    }
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <h1 className='navbar-name'>Naba Zehra Jafri</h1>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav"> 
        <span className='navbar-toggler-icon'/>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=>onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>

          <span className='navbar-text'>
            <div className='social-icon'>
                <a href="http://linkedin.com/in/nabajafri" target='_blank'><img src={navicon_1} alt=''/></a>
                <a href="https://www.facebook.com/naba.jafri.9?mibextid=LQQJ4d" target='_blank'><img src={navicon_2} alt=''/></a>
                <a href="https://instagram.com/naba_jafri?igshid=MzRlODBiNWFlZA==" target='_blank'><img src={navicon_3} alt=''/></a>
            </div>
            <a href="#connect"><button className='vvd' onClick={()=> console.log('connect')}>Contact me</button> </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;