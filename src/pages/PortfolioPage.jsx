// import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function PortfolioPage() {
  const projects = [
    { title: 'Project 1', text: 'Description for project 1', imgSrc: 'holder.js/100px180' },
    { title: 'Project 2', text: 'Description for project 2', imgSrc: 'holder.js/100px180' },
    { title: 'Project 3', text: 'Description for project 3', imgSrc: 'holder.js/100px180' },
    { title: 'Project 4', text: 'Description for project 4', imgSrc: 'holder.js/100px180' },
    { title: 'Project 5', text: 'Description for project 5', imgSrc: 'holder.js/100px180' },
    { title: 'Project 6', text: 'Description for project 6', imgSrc: 'holder.js/100px180' },
];
return (
  <Container>
      <Row>
          {projects.map((project, index) => (
              <Col key={index} sm={12} md={6} lg={4} className="mb-4">
                  <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={project.imgSrc} />
                      <Card.Body>
                          <Card.Title>{project.title}</Card.Title>
                          <Card.Text>{project.text}</Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                  </Card>
              </Col>
          ))}
      </Row>
  </Container>
);
      // return (
      //   <Card style={{ width: '18rem' }}>
      //     <Card.Img variant="top" src="holder.js/100px180" />
      //     <Card.Body>
      //       <Card.Title>Card Title</Card.Title>
      //       <Card.Text>
      //         Some quick example text to build on the card title and make up the
      //         bulk of the card&apos;s content.
      //       </Card.Text>
      //       <Button variant="primary">Go somewhere</Button>
      //     </Card.Body>
      //   </Card>
      // );
}
