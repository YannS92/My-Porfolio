import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiPostgresql,
  SiCsharp,
  SiScikitlearn,
  SiDotnet,
  SiGnubash,
  SiPowershell,
  SiPhp,
} from "react-icons/si";
import { FaCuttlefish } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaCuttlefish /> {/* C */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus /> {/* C++ */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp /> {/* C# */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 /> {/* HTML */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 /> {/* CSS */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /> {/* JavaScript */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs /> {/* Node.js */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /> {/* React */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb /> {/* MongoDB */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql /> {/* PostgreSQL */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPhp /> {/* PHP */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /> {/* Python */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn /> {/* Scikit-learn */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet /> {/* .NET Core 3.X */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGnubash /> {/* G-code */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowershell /> {/* PowerShell */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava /> {/* Java */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /> {/* Git */}
      </Col>
    </Row>
  );
}

export default Techstack;