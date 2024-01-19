
import { Link } from "react-router-dom"
import "./about.css"

export default function AboutMe() {
    
    return(
        <div className="homepageContainer">
            <div className="firstPartHomepage">
                <div className = "profession">
                    <p className = "specialism">{`<Web Developer>`}</p>
                </div> 
                <div className = "motivation">
                    <p>I am an enthusiast of Software and Web Development. My desire to discover
                    various development environments and my eagerness to take on new challenges make me 
                    a quick learner and an adaptable team player. I will be
                    excited to use my knowledge and skills to create innovative digital solutions
                    that enhance user experiences.</p>
                </div>
                <div className="btnContainer">
                    <Link to = "/contact">
                        <button className="contactBtn">Contact me</button>
                    </Link>
                </div>
            </div>
            <div className="picContainer">
            </div>
        </div>
    )
}