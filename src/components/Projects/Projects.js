import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import RARV from "../../Assets/Projects/RARV.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Cyber from "../../Assets/Projects/Cyber.png";
import AI from "../../Assets/Projects/AI.png";
import Eat from "../../Assets/Projects/Eat.png";
import colle from "../../Assets/Projects/colle.png";
import RO from "../../Assets/Projects/RO.png";

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
              imgPath={RARV}
              isBlog={false}
              title={<span className="purple">Factory Frenzy Project</span>}
              description={(
                <>
                  Our mission was to create “Factory Frenzy”, a game inspired by Fall Guys.
                   The project consists of a race with platforms and traps, divided into two applications: level editing in VR and multiplayer play on a classic PC.
                   We therefore carried out a POC to assess the project's viability.
                  <br />
                  <div className="centered-text">
                    <span className="purple">Unity</span>
                    <span className="purple">C#</span>
                  </div>
                </>
              )}
              ghLink="https://github.com/YannS92/Projet-RA-RV"
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
              imgPath={Cyber}
              isBlog={false}
              title={<span className="purple">Cybersecurity Project</span>}
              description={(
                <>
                  This cybersecurity project implements a secure infrastructure, carries out audits and analyzes vulnerabilities. It uses specific tools to monitor and protect the network against intrusions. The recommendations are designed to improve the overall security of the IT environment.
                  <br />
                  <div className="centered-text">
                    <span className="purple">Active Directory</span>
                    <span className="purple">Kali Linux</span>
                  </div>
                </>
              )}
              ghLink="https://github.com/YannS92/Cybersecurity"
              // demoLink="" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RO}
              isBlog={false}
              title={<span className="purple">Algo-Avance Project</span>}
              description={(
                <>
                  In this project, we study the management of delivery rounds on a road network in order to minimize the total delivery time. We need to study the scope of the problem by setting up a basic version of our problem and then adding certain constraints to make our problem more realistic.
                  <br />
                  <div className="centered-text">
                    <span className="purple">Python</span>
                    <span className="purple">Meta Heuristics</span>
                  </div>
                </>
              )}
              ghLink="https://github.com/YannS92/Projet_Algo-Avance"
              // demoLink="" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Eat}
              isBlog={false}
              title={<span className="purple">Cesi Eat Project</span>}
              description={(
                <>
                  The project involves creating an innovative software platform for online catering, integrating various services for end users, restaurateurs, delivery drivers, developers, and sales and technical teams. It represents an opportunity to put into practice all the IT skills acquired, and to take on challenges similar to those encountered in a professional environment.
                  <br />
                  <div className="centered-text">
                    <span className="purple">React</span>
                    <span className="purple">Expo Go</span>
                    <span className="purple">Node.js</span>
                  </div>
                </>
              )}
              ghLink="https://github.com/YannS92/Cesi_X"
              // demoLink="" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AI}
              isBlog={false}
              title={<span className="purple">AI For HUMANFORYOU Project</span>}
              description={(
                <>
                  What factors are responsible for employee attrition? By performing an exploratory data analysis (EDA), we can find out how each characteristic is responsible for the attrition of company employees, and then by designing ML models, find the probability of characteristics for attrition.
                  <br />
                  <div className="centered-text">
                    <span className="purple">Scikit-learn</span>
                    <span className="purple">Python</span>
                  </div>
                </>
              )}
              ghLink="https://github.com/YannS92/IA_FOR_HUMANFORYOU"
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
              imgPath={colle}
              isBlog={false}
              title={<span className="purple">Gluing machine Project</span>}
              description={(
                <>
                  This project is being carried out by Solution3D, in response to a call for tenders from prime contractor Wally Ash. The aim is to improve working conditions on a semi-automated assembly line by integrating an automated gluing station. The project is being carried out in partnership with LINEACT in Rouen, on the “Factory of the Future” platform.
                  <br />
                  <div className="centered-text">
                    <span className="purple">G-code</span>
                    <span className="purple">Mathematics</span>
                  </div>
                </>
              )}
              ghLink="https://github.com/YannS92/Projet-Encolleuse"
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
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
