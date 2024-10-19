// import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import placeHolderImg from '../assets/images/Coming-Soon.jpg';
import socialSyncImg from '../assets/images/SocialSync.gif';
import weatherDashboardImg from '../assets/images/WeatherDashboard.jpg';


export default function PortfolioPage() {
  const projects = [
    { title: 'SocialSync', text: 'Your go-to platform for planning community events.', imgSrc: socialSyncImg, deployedSiteLink: 'https://socialsync-kjg6.onrender.com', gitHubRepoLink: 'https://github.com/ASgithub11/SocialSync' },
    { title: 'Weather Dashboard', text: 'Easy access to weather conditions for planning trips or daily activities', imgSrc: weatherDashboardImg, deployedSiteLink: 'https://keiths-weather-dashboard.onrender.com', gitHubRepoLink: 'https://github.com/keithamadeus/Keiths-Weather-Dashboard/tree/main' },
    { title: 'Project 3', text: 'Description for project 3', imgSrc: placeHolderImg, deployedSiteLink: '/project3', gitHubRepoLink: '/project2' },
    { title: 'Project 4', text: 'Description for project 4', imgSrc: placeHolderImg, deployedSiteLink: '/project4', gitHubRepoLink: '/project2' },
    { title: 'Project 5', text: 'Description for project 5', imgSrc: placeHolderImg, deployedSiteLink: '/project5', gitHubRepoLink: '/project2' },
    { title: 'Project 6', text: 'Description for project 6', imgSrc: placeHolderImg, deployedSiteLink: '/project6', gitHubRepoLink: '/project2' },
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
                          <Link to={project.deployedSiteLink}>
                            <Button variant="primary" className="btn btn-outline-primary" >Deployed Site</Button>
                          </Link>
                          <Link to={project.gitHubRepoLink}>
                            <Button variant="info" className="btn btn-outline-info btn-sm">Git Hub Repo</Button>
                          </Link>
                      </Card.Body>
                  </Card>
              </Col>
          ))}
      </Row>
  </Container>
);
}
