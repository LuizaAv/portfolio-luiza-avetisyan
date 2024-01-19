import "./projects.css"

import library from "../../assets/library.png";
import weather from "../../assets/weather.png";
import finance from "../../assets/finance.png";
import gpt from "../../assets/gpt.png";
import countDown from "../../assets/countDown.png";
import cards from "../../assets/cards.png";
import portfolio from "../../assets/portfolio.png"

export default function Portfolio() {
  
    return(
        <div className="projectsContainer">
        <h1>My Projects</h1>
            <div className="wrapperProjects">
                <div className="projectsElem">
                    <img src={library} alt = "library"/>
                    <div className="aboutProjectContainer">
                        <h2>Online Library of Academy</h2>
                        <p>The project is implemented with React.js, Node.js, Express.js, MongoDB. 
                        The project includes a login/registration section. Authentication is implemented 
                        using JWT (JSON Web Tokens).JWT tokens have a 24-hour expiration.
                        Registered users have the ability to borrow books from the library.
                        The borrowing functionality implies that there is a system for tracking
                        the availability of books.The project includes filters to search or categorize books based on various criteria.
                        The filters provide users with a way to organize or find books based on their preferences.</p>
                        <div className = "toGitHub"><a href="https://github.com/LuizaAv/Library">Show in GitHub...</a></div>
                    </div>
                </div>
                <div className="projectsElem">
                    <div className="aboutProjectContainer">
                        <h2>Weather App</h2>
                        <p>
                        The project is implemented with React.js.
                        It has user friendly interface. Trougth this application user can enter name of country and see the temperature, humidity and wind speead there. 
                        </p>
                        <div className = "toGitHub"><a href="https://github.com/LuizaAv/Weather-app">Show in GitHub...</a></div>
                    </div>
                    <img src={weather} alt = "weather" />
                </div>
                <div className="projectsElem">
                    <img src={finance} alt = "finance" />
                    <div className="aboutProjectContainer">
                        <h2>Financial App</h2>
                        <p>The project is implemented with React.js. JSON is used as the storage format for data.
                        Users can add and delete both expenses and incomes. The application supports filtering of expenses and incomes.
                        Users can view the history of both expenses and incomes. The application includes charts that visually represent information about expenses and incomes.
                        Charts can be filtered based on date or amount, providing a dynamic visualization of financial data.
                        </p>
                        <div className = "toGitHub"><a href="https://github.com/LuizaAv/aca-final-project-lge">Show in GitHub...</a></div>
                    </div>
                </div>
                <div className="projectsElem">
                    <div className="aboutProjectContainer">
                        <h2>Portfolio</h2>
                        <p>The project is implemented with React.js.
                        This project created to provide information about myself to customers and talent acquisition specialists.
                        The app is designed to be responsive, adapting to various devices including web browsers, tablets, and mobile devices.
                        The app includes various sections, likely containing information about my background, skills, experience, and portfolio.
                        The app features a "Contact Me" section. Here viewers can find my contacts, also input their contacts and send me direct message.
                        Will be happy for cooperation :)
                        </p>
                        <div className = "toGitHub"><a href="#">Show in GitHub...</a></div>
                    </div>
                    <img src={portfolio} alt="portfolio" />
                </div>   
                <div className="projectsElem">
                    <img src={countDown} alt="countDown" />
                    <div className="aboutProjectContainer">
                        <h2>Count Down App</h2>
                        <p>The project is implemented with simple HTML/CSS/JS.
                        This small project created for simple count down. You can set any date you want and the app will start count down untill mentioned date.
                        </p>
                        <div className = "toGitHub"><a href="https://github.com/LuizaAv/CountdownApp">Show in GitHub...</a></div>
                    </div>
                </div>     
                <div className="projectsElem">
                    <div className="aboutProjectContainer">
                        <h2>Cards' deck</h2>
                        <p>The project implemented with pure Javascript.
                        This small project is for shuffling cards. It has button and onclick it randomly chooses a card and shows it.
                        </p>
                        <div className = "toGitHub"><a href="https://github.com/LuizaAv/DeckofCards">Show in GitHub...</a></div>
                    </div>
                    <img src={cards} alt="cards" />
                </div>    
                <div className="projectsElem">
                <img src={gpt} alt="gpt" />
                <div className="aboutProjectContainer">
                    <h2>Questions To GPT</h2>
                    <p>This small project implemented with Node.js is for asking questions to Chat GPT.
                    This part can be used in any application who need to integrate chat in his/her app.
                    </p>
                    <div className = "toGitHub"><a href="https://github.com/LuizaAv/QuestionToChatGPT">Show in GitHub...</a></div>
                </div>
            </div>        
            </div>
        </div>
    )
}