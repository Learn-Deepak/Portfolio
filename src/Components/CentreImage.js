import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CollegePhoto from '../Assets/CollegePhoto2.jpg'


function CentreImage(){
    return(
        <Row id="centerImg">
            <Col md={12}>
                <img src={CollegePhoto} alt="coverPhoto" id="coverImage"/>
            </Col>
            <Col md={12}>
                <h1>Welcome Here</h1>
            </Col>
        </Row>
    )
}

export default CentreImage