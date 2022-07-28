import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Uttam Singh</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h3> Front-End </h3>
            <span>
              ReactJS, Redux, HTML, CSS, NPM,
              BootStrap, MaterialUI
            </span>
          </li>
          <li className="item">
            <h3>Back-End</h3>
            <span>
              NodeJS, ExpressJS, MySQL, Postman
            </span>
          </li>
          <li className="item">
            <h3>Languages</h3>
            <span>Java, JavaScript, Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;