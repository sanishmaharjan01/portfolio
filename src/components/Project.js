
import { Container, Row, Col, Card } from 'react-bootstrap';

export const Project = () => {
  const projectList = [
    {
      title: "Fitness Spark",
      description: "A gym meal planning website with recipes and nutrition info.",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "This very portfolio you're viewing!",
      link: "https://sanixport.netlify.app/",
    },
  ];

  return (
    <section id="project" className="project-section">
      <Container>
        <h2 className="text-center mb-5">Projects</h2>
        <Row>
          {projectList.map((project, index) => (
            <Col md={4} key={index}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer">
                      View Project
                    </a>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
