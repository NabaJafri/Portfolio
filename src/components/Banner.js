import {Container, Row, Col} from "react-bootstrap"
import {ArrowRightCircle} from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"
import { useState,useEffect} from "react"

export const Banner =()=>{

    const [loopNum,setLoopNum] = useState(0);
    const [isDeleting, setisDeleting]=useState(false);
    const [text,setText]= useState('')
    const period = 2000;
    const toRotate =["Software Engineer", "Web Designer", "Web Developer"]
    const [delta,setDelta]= useState(300- Math.random()*100)

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta )
        return()=> {clearInterval(ticker)};
    },[text])


    
    const tick =()=>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length+1)

        setText(updatedText);

        if(isDeleting)
        {
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleting && updatedText === fullText)
        {
            setisDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText === "")
        {
            setisDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm a `} <span className="wrap">{text}</span></h1>
                        <p>I'm a passionate Software Developer from Karachi, Pakistan. Through my portfolio, I showcase my skills, experience, and creative work. Whether it's developing innovative web applications or designing captivating user interfaces, I'm dedicated to delivering high-quality results that exceed expectations. Explore my portfolio for a glimpse of my journey. Thank you for visiting!</p>
                        <a href="#connect">   <button onClick={()=>console.log('connect')}>Contact me <ArrowRightCircle size={25}/></button> </a>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;