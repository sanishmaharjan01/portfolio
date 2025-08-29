import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";

// ✅ Import images directly from src/assets/img
import fitnessImg from "../assets/img/fitness.png";
import portfolioImg from "../assets/img/portfolio.png"; // change to your actual screenshot file

export const Project = () => {
  const projectList = [
    {
      title: "Fitness Spark",
      description:
        "A fitness tracking platform where users can monitor workouts, plan meals, and track progress with an intuitive interface.",
      link: "http://fitness-spark.duckdns.org/",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      badge: "Full Stack",
      featured: true,
      image: fitnessImg, // imported image
    },
    {
      title: "Portfolio Website",
      description:
        "My personal portfolio showcasing projects, skills, and experience. Built with modern React and styled using Bootstrap.",
      link: "https://sanixport.netlify.app/",
      tags: ["React", "Bootstrap", "Netlify"],
      badge: "Frontend",
      featured: true,
      image: portfolioImg, // imported image
    },
  ];

  return (
    <section id="project" className="project-section py-5">
      <Container>
        <h2 className="text-center mb-4">Featured Work</h2>
       <p className="text-center text-muted mb-5 section-subtitle">
        A showcase of my recent projects demonstrating expertise in full-stack
        development, modern frameworks, and creative problem-solving.
      </p>
        <Row>
          {projectList.map((project, index) => (
            <Col md={6} key={index} className="mb-4">
              <Card className="shadow-sm h-100">
                <div className="position-relative">
                  <Card.Img
                    variant="top"
                    src={project.image}
                    alt={project.title}
                  />
                  {project.featured && (
                    <Badge
                      bg="dark"
                      className="position-absolute top-0 start-0 m-2"
                    >
                      Featured
                    </Badge>
                  )}
                  <Badge
                    bg="primary"
                    className="position-absolute top-0 end-0 m-2"
                  >
                    {project.badge}
                  </Badge>
                </div>

                <Card.Body className="d-flex flex-column">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {project.description}
                  </Card.Text>

                  <div className="mb-3">
                    {project.tags.map((tag, i) => (
                      <Badge
                        pill
                        bg="light"
                        text="dark"
                        key={i}
                        className="me-2 mb-2"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Button
                      variant="dark"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Project
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
