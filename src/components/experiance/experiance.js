import "./experiance.css";



import { aboutMe, eduHistory } from "../consts";

export default function Experiance() {
  return (
    <div className="aboutContainer">
      <div className="aboutHeader">
        <h1 className="aboutMe">SHORT ABOUT ME</h1>
      </div>
      <div className="careerContainer">
        <div className="firstColoumn">
          <h1>Work Experience</h1>
          {aboutMe.map((item, index) => {
            return (
              <div className="workeducation" key={index}>
                <p>{item.date}</p>
                <p>
                  <b>
                    <a href={`${item.website}`} target="blank">
                      {item.place}
                    </a>
                  </b>
                </p>
                <br />
                <p>{item.position}</p>
                <br />
                {index !== aboutMe.length - 1 ? <hr /> : null}
              </div>
            );
          })}
        </div>
        <div className="secondColoumn">
          <h1>Education</h1>
          {eduHistory.map((item, index) => {
            return (
              <div className="workeducation" key={index}>
                {item.date} <br />
                <p>
                  <b>
                    <a href={item.website} target="_blank">
                      {item.place}
                    </a>
                  </b>
                </p>
                <br />
                {item.learningMaterial.map((learnItem, learnIndex) => {
                  return (
                    <div className="eduItemsContainer" key={learnIndex}>
                      {learnItem === item.learningMaterial[0] ? <br /> : null}
                      {learnItem !== eduHistory[0].learningMaterial[0] ? (
                        <div>&#x2713;</div>
                      ) : null}
                      {learnItem}
                      <br />
                    </div>
                  );
                })}
                {index !== eduHistory.length - 1 ? <hr /> : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}