import React from "react";
import NavTopbar from "./NavTopbar";
import EduTag from "./EduTag";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import arr from '../Data/EducationData'

function makeEducationCard(){
  let makeDesign = arr.map(itm => <Col  md={4} key={itm.id}><EduTag  img={itm.img} head={itm.head} name = {itm.name} yr = {itm.period} mks = {itm.marks}/></Col>);
  return makeDesign;
}

function Education() {
  return (
    <>
      <NavTopbar addBg="dark" />
      <Container fluid id="containEdu"  style={{backgroundColor : "#339266", color: "black", height: "78vh"}}>
      <Row style={{height:"5vh", backgroundColor: "#ffffff"}} ></Row>
      <Row  style={{paddingTop:"5vh"}}>
        {makeEducationCard()}
      </Row>
      </Container>
      
    </>
  );
}

export default Education;
