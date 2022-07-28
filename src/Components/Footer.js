import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GmailIcon from "@mui/icons-material/Mail";
import "../styles/Footer.css";
function Footer() {
  return (
    <div className='footer'>
        <div>
            <InstagramIcon/>
            <GithubIcon/>
            <LinkedInIcon/>
            <GmailIcon/>
        </div>
        <p>&copy; UttamSingh</p>
        </div>
  )
}

export default Footer