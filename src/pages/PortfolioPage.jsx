// import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
// import placeHolderImg from '../assets/images/Coming-Soon.jpg';
import socialSyncImg from '../assets/images/SocialSync.gif';
import weatherDashboardImg from '../assets/images/WeatherDashboard.jpg';
import codeRefactorGif from '../assets/images/Horiseon_Social_Solution.gif';
import htmlCssPortfolioImg from '../assets/images/HTML&CSS-Portfolio.jpg';
import employeePayrollTrackerGif from '../assets/images/employee-tracker.gif';
import scrumBoardGif from '../assets/images/scrumBoard.gif';


export default function PortfolioPage() {
  const projects = [
    { title: 'SocialSync', text: 'Your go-to platform for planning community events.', imgSrc: socialSyncImg, deployedSiteLink: 'https://socialsync-kjg6.onrender.com', gitHubRepoLink: 'https://github.com/ASgithub11/SocialSync' },
    { title: 'Weather Dashboard', text: 'Easy access to weather conditions for planning trips or daily activities', imgSrc: weatherDashboardImg, deployedSiteLink: 'https://keiths-weather-dashboard.onrender.com', gitHubRepoLink: 'https://github.com/keithamadeus/Keiths-Weather-Dashboard/tree/main' },
    { title: 'scrumBoard', text: 'This tool allows teams to create cards to visualize their tasks and projects', imgSrc: scrumBoardGif, deployedSiteLink: 'https://lindsayhoutz.github.io/scrumBoard/', gitHubRepoLink: 'https://github.com/lindsayhoutz/scrumBoard' },
    { title: 'Employee Payroll Tracker', text: 'Employee Payroll Tracker which logged the average salary between all employees, along with a random employee winner', imgSrc: employeePayrollTrackerGif, deployedSiteLink: 'https://keithamadeus.github.io/module_3_challenge/', gitHubRepoLink: 'https://github.com/keithamadeus/module_3_challenge' },
    { title: 'HTML & CSS Portfolio', text: 'Uses agile project management to Showcase projects and skills', imgSrc: htmlCssPortfolioImg, deployedSiteLink: 'https://keithamadeus.github.io/Module-2-Challenge/', gitHubRepoLink: 'https://github.com/keithamadeus/Module-2-Challenge' },
    { title: 'Code Accessibility Refactor', text: 'Code Refactor Using agile project management to increase Accessibility', imgSrc: codeRefactorGif, deployedSiteLink: 'https://keithamadeus.github.io/Module-1-Challenge/', gitHubRepoLink: 'https://github.com/keithamadeus/Module-1-Challenge' },
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
