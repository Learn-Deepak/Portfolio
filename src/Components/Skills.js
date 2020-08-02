import React from "react";
import NavTopbar from "./NavTopbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import JavaScript from "../Assets/JavaScript.png";
import HTML from "../Assets/html.png";
import CSS from "../Assets/css.png";
import Bootstrap from "../Assets/bootStrap.png";
import AngularJS from "../Assets/AngularJS.png";
import ReactJS from "../Assets/react.png";
import Java from "../Assets/java.png";
import SQL from "../Assets/SQL.png";
import SillsNames from "./SkillsNames";

function Skills() {
  return (
    <>
      <NavTopbar addBg="dark" />
      <Container fluid id="containSkills"   style={{  height: "78vh"}}>   {/*backgroundColor : "#fbae1c", */}
        <Row style={{height:"5vh", backgroundColor: "#ffffff"}} ></Row>
        <Container>
        <Row style={{ paddingTop: "3vh", textAlign : "center" }}>
          <Col md={3} sm={6} xs={6}>
            <SillsNames img={JavaScript} name="JavaScript" />
          </Col>
          <Col md={3} sm={6} xs={6}>
            <SillsNames img={HTML} name="HTML" />
          </Col>
          <Col md={3} sm={6} xs={6}>
            <SillsNames img={CSS} name="CSS" />
          </Col>
          <Col md={3} sm={6} xs={6}>
            <SillsNames img={Bootstrap} name="Bootstrap" style={{borderRadius : "15vh"}} />
          </Col>
        </Row>
        <Row style={{ height: "20vh" }}></Row>
        <Row style={{textAlign : "center"}}>
          <Col md={3} sm={6} xs={6}>
            <SillsNames img={AngularJS} name="AngularJS" />
          </Col>
          <Col md={3} sm={6} xs={6}>
            <SillsNames img={ReactJS} name="ReactJS" />
          </Col>
          <Col md={3} sm={6} xs={6}>
            <SillsNames img={Java} name="Java" />
          </Col>
          <Col md={3} sm={6} xs={6}>
            <SillsNames img={SQL} name="SQL" />
          </Col>
        </Row>
        </Container>        
      </Container>
    </>
  );
}

export default Skills;
