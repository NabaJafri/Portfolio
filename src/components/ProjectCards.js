import{Col} from "react-bootstrap"

export const ProjectCards = ({title,description,imgURL})=>{
return(
    <Col sm={6} md={4}>
        <div className="proj-imgbx">
            <img src={imgURL} alt="image"/>
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
    </Col>
)
}

export default ProjectCards;