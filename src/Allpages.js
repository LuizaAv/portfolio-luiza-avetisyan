import AboutMe from "./components/aboutme/about";
import Contact from "./components/contact/contact";
import Experiance from "./components/experiance/experiance";
import Portfolio from "./components/projects/projects";
import Skills from "./components/skills/skills";


export default function Allpages(){

    return(
        <div>
            <AboutMe />
            <Experiance />
            <Skills />
            <Portfolio />
            <Contact />
        </div>
    )
}