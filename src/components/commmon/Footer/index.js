import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
  return (
    <div className="Footer">
      <h1 id="footer-heading">My Webpage Footer</h1>
      <div className="content">
        <div>
          <h5>Follow us on</h5>
          <a href="https://www.instagram.com/_y_e_s_h_u._/" target="blank"> <FontAwesomeIcon icon={faInstagram} id="socialIcon"  /></a>
          <a href="https://www.facebook.com/profile.php?id=100010744235518" target="blank"><FontAwesomeIcon icon={faFacebook} id="socialIcon" /></a>

          <a href="https://twitter.com/Yeshwanth2002" target="blank"><FontAwesomeIcon icon={faTwitter} id="socialIcon" /></a>

          <a href="https://www.linkedin.com/in/yeshwanth-dasari-256409230/" target="blank"><FontAwesomeIcon icon={faLinkedin} id="socialIcon" /></a>
          
        </div>
        <div>
          <h5>Contact us</h5>
          <table>
            
                <td><FontAwesomeIcon icon={faPhone} /></td>
                <td><p>9876543210</p></td>
            
          </table>
          
          
        </div>
        <div className="subscribe">
          <h5>Subscribe to us</h5>
          <label for = "email">Email</label>
          <input type="email" id="email"></input>
          <button>Subscribe</button> 
        </div>
      </div>
    </div>
  );
};

export default Footer;
