import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

function EduTag({head ,img, name, yr, mks}) {
  return (
    <Card >
      <Card.Img variant="top"  src={img} />
      <Card.Body>
      <Card.Title style={{textAlign: "center"}}>{head}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{name}</ListGroupItem>
        <ListGroupItem>{yr}</ListGroupItem>
        <ListGroupItem>{mks}</ListGroupItem>
      </ListGroup>
    </Card>
  );
}

export default EduTag;
