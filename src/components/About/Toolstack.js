import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGithub,
  SiApachehive,
  SiApachehadoop,
  SiCloudera,
  SiCisco,
  SiFigma,
  SiTrello,
  SiPowerbi,
  SiTalend,
  SiUnity,
  SiKalilinux,
  SiExpo,
  SiDocker,
  SiMicrosoft,
  SiJirasoftware,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /> {/* VS Code */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /> {/* Postman */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub /> {/* GitHub */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma /> {/* Figma */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTrello /> {/* Trello */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJirasoftware /> {/* Agile */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi /> {/* Power BI */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTalend /> {/* Talend */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnity /> {/* Unity */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker /> {/* Docker */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKalilinux /> {/* Kali Linux */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpo /> {/* Expo Go */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoft /> {/* Active Directory */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCisco /> {/* Cisco */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachehive /> {/* Hive */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachehadoop /> {/* Hadoop */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCloudera /> {/* Cloudera */}
      </Col>
    </Row>
  );
}

export default Toolstack;