import { Container , Row , Col, Tab, Nav} from "react-bootstrap";
import ProjectCard from './ProjectCards'
import colorSharp2 from '../assets/img/color-sharp2.png'
import projectImg1 from '../assets/img/project-img1.png'
import projectImg2 from '../assets/img/project-img2.png'
import projectImg3 from '../assets/img/project-img3.png'

export const Project =()=>{
  const projects =[
    {
        title: "AddddBC",
        description: "React Project Tutorial: Build a Responsive Portfolio Website w/ Advanced Animations (2022)",
        imgURL:projectImg3
    },
    {
        title: "ABC",
        description: "React Project Tutorial: Build a Responsive Portfolio Website w/ Advanced Animations (2022)",
        imgURL:projectImg3
    },
    {
        title: "ABC",
        description: "React Project Tutorial: Build a Responsive Portfolio Website w/ Advanced Animations (2022)",
        imgURL:projectImg3
    }
  ]
  return(
    <section className="project" id="project">     
    <Container> 
        <Row>
            <Col>
            <h2>Projects</h2>
           
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" >
                    <Nav.Item>
                        <Nav.Link eventKey="first">1.</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="second">2.</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="third">3.</Nav.Link>
                    </Nav.Item>
                </Nav>

                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Row>
                            {
                                projects.map((project,index)=>{
                                    return(
                                        <ProjectCard 
                                        key={index}
                                        {...project}/>
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      No projects here
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    No projects here
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
            </Col>
        </Row>
    </Container>
    <img className="background-image-right" src={colorSharp2} alt="Image"/>
    </section>

  )
}

export default Project;