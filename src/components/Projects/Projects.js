import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title={<span className="purple">EasySave Project</span>}
              description={(
                <>
                  The EasySave project consists in developing a backup software. 
                  The software must write in real time in a daily log file the history of backup job actions.
                  <br />
                  <div className="centered-text">
                    <span className="purple">C#</span>
                    <span className="purple">Net.Core 3.X Library</span>
                  </div>
                </>
              )}
              ghLink="https://github.com/YannS92/Projet-EasySave-v1.0"
              // demoLink="" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title={<span className="purple">Cloud Healthcare Unit Project</span>}
              description={(
                <>
                  Installation of a big data warehouse by meeting the needs and requirements of access and analysis of users.
                  <br />
                  <div className="centered-text">
                    <span className="purple">Talend</span>
                    <span className="purple">Cloudera</span>
                    <span className="purple">Hive</span>
                    <span className="purple">PowerBI</span>
                  </div>
                </>
              )}
              ghLink="https://github.com/YannS92/BigData"
              // demoLink="" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title={<span className="purple">Web Project</span>}
              description={(
                <>
                  Creation of a site for the search for an internship in a company by activating their 
                  networks personal and professional (LinkedIn, old promotions, etc.), by applying for offers or by sending unsolicited applications.
                  <br />
                  <div className="centered-text">
                    <span className="purple">HTML</span>
                    <span className="purple">PHP</span>
                    <span className="purple">JavaScript</span>
                    <span className="purple">CSS</span>
                  </div>
                </>
              )}
              ghLink="https://github.com/YannS92/Web-Project"
              // demoLink="" <--------Please include a demo link here              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title={<span className="purple">ABSTERGO Project</span>}
              description={(
                <>
                  Setting up the Active Directory of a company.
                  <br />
                  <div className="centered-text">
                    <span className="purple">PowerShell</span>
                    <span className="purple">Docker</span>
                    <span className="purple">Active Directory</span>
                  </div>
                </>
              )}
              //ghLink="https://github.com/YannS92"
              // demoLink="" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title={<span className="purple">Cisco Project</span>}
              description={(
                <>
                  Setting up the network infrastructure of a company (library).
                  <br />
                  <div className="centered-text">
                    <span className="purple">Cisco</span>
                    <span className="purple">Docker</span>
                    <span className="purple">Active Directory</span>
                  </div>
                </>
              )}
              //ghLink="https://github.com/YannS92"
              // demoLink="" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title={<span className="purple">SOON</span>}
              description={(
                <>
                  SOON
                </>
              )}
              //ghLink="https://github.com/YannS92"
              // demoLink="" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
