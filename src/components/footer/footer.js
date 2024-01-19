import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <p>&copy; 2024 Luiza Avetisyan</p>
        </div>
        <div className="footer-right">
        <h4>
            <a  href="https://www.linkedin.com/in/luiza-avetisyan-7038aa17b/"
                target="_blank" >
                <FaLinkedin style = {{color: "#0077B5", height: "40px", width: "40px"}}/>
            </a>
        </h4>
        <h4>
            <a href="https://github.com/LuizaAv" target="_blank">
                <FaGithub style={{color: "black", height: "40px", width: "40px"}}/>
            </a>
        </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;