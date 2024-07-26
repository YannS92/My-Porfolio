import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">SUBTS Yann </span>
            from <span className="purple">France.</span>
            <br />
            I'm <span className="purple">23</span> years old
            <br />
            I've just graduated from the CESI computer engineering school.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Movies and Series
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Empowering Tomorrow, One Byte at a Time"{" "}
          </p>
          <footer className="blockquote-footer">SUBTS Yann</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
