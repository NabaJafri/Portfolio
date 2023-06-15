import { useState } from "react";
import {Container, Row,Col} from "react-bootstrap"
import contactImg from "../assets/img/contact-img.svg"
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";
export const ContactForm = () =>{

    const fromInitialDetails={
        firstName:"",lastName:"",email:"",phone:"",message:""
    }
    const[formDetails,setFormDetails]= useState(fromInitialDetails);
    const[buttonText,setButtonText]=useState("send");
    const[status,setStatus]=useState({});

    const onFormUpdate = (category,value) =>{

        setFormDetails({
            ...formDetails, [category]:value
        })

        console.log(formDetails);   

    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("/api/contact",{
            method:"POST",
            headers:{
                "Content-type":"application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails)
        });
        console.log(response);
        let result = await response.json();
        setButtonText("Send")
        setFormDetails(fromInitialDetails);
        if(response.status===200){
            setStatus({success:true, message: "Message sent successfully!"});
        }
        else{
            setStatus({success:false,message:"Error! Message not sent."})
        }
    }
    return(
        <section className="contact" id="connect">
            <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <img src={contactImg} alt="Contact us"/>
                </Col>
                <Col md={6}>
                    <h2>Let's Connect!</h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e)=> onFormUpdate('firstName',e.target.value)}required/>
                            </Col>
                            <Col sm={6} className="px-1">
                            <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e)=> onFormUpdate('lastName',e.target.value)} required/>
                            </Col>
                            <Col sm={6} className="px-1">
                            <input type="email" value={formDetails.email} placeholder="Email" onChange={(e)=> onFormUpdate('email',e.target.value)} required/>
                            </Col>
                            <Col sm={6} className="px-1">
                            <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e)=> onFormUpdate('phone',e.target.value)} required/>
                            </Col>
                            <Col>
                            <textarea rows={6} value={formDetails.message} placeholder="Message" onChange={(e)=> onFormUpdate('message',e.target.value)} required/>
                            <button type="submit"><span>{buttonText}</span></button>
                            </Col>
                        </Row>
                    </form>
                            {
                                status.message &&(
                                <Col>
                                  <p>{status.message} </p>
                                </Col>
                            )}
                </Col>
            </Row>
            </Container>
        </section>
    )
}

export default ContactForm;