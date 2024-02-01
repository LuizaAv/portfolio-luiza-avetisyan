
import "./skills.css";

import ca from "./pictures/ca.png";
import algorithms from "./pictures/algorithms.png";
import html5 from "./pictures/html.png"
import css3 from "./pictures/css.png";
import js from "./pictures/js.png";
import react from "./pictures/react.png";
import node from "./pictures/node.png";
import mongo from "./pictures/mongo.png";
import c from "./pictures/c.png";
import linux from "./pictures/linux.png";
import git from "./pictures/git.png";
import ooad from "./pictures/ooad.png";

const skills = [
    {
        name: "Computer Architecture",
        imgPath: ca,
    },
    {
        name: "Algorithms and Data Structure",
        imgPath: algorithms,
    },
    {
        name: "HTML5",
        imgPath: html5,
    },
    {
        name: "CSS3",
        imgPath: css3,
    },
    {
        name: "JS",
        imgPath: js,
    },
    {
        name: "React.js",
        imgPath: react,
    },
    {
        name: "Node.js",
        imgPath: node,
    },
    {
        name: "Mongo DB",
        imgPath: mongo,
    },
    {
        name: "C",
        imgPath: c,
    },
    {
        name: "Linux",
        imgPath: linux,
    },
    {
        name: "OOAD",
        imgPath: ooad,
    },
    {
        name: "Git / Github",
        imgPath: git,
    }
]



export default function Skills(){

    return(
        <div className="skillsContainer">
        <h1>My Skills</h1>
            <div className="innerContainer">
                {skills.map((item, index) => (
                    <div key={index} className="pictureContainer">
                        <img src={item.imgPath} alt={item.name} />
                        <div className="skillName">{item.name}</div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}