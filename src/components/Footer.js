import { Container, Row,Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg"
import navicon_1 from '../assets/img/nav-icon1.svg'
import navicon_2 from '../assets/img/nav-icon2.svg'
import navicon_3 from '../assets/img/nav-icon3.svg'

export const Footer = () =>{

    return(

        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    
                    <Col sm={6} className="text-center text-sm-end">
                        {/* <div>
                            <a href=""><img src={navicon_1}/></a>
                            <a href=""><img src={navicon_2}/></a>
                            <a href=""><img src={navicon_3}/></a>
                        </div> */}
                        <p>&copy; 2023. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>

    )
}
export default Footer;