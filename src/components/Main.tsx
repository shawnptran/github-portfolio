import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import portrait from '../assets/images/portrait.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src= {portrait} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/shawnptran" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/shawntran/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Shawn Tran</h1>
          <p>Aspiring Data Scientist / Continuous Improvement Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/shawnptran" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/shawntran/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;