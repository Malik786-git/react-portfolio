import PageHeading from "./PageHeading"
import MyGithub from "./MyGithub"
import Footer from "./Footer/Footer"
import Projects from "./WorkComponents/Projects"
const Work = () => {
 

  const projectDescription = [
       {
        name: "Resume Builder",
        tech: "React JS Project",
        src: "./assets/img/project1.png",
        link:"https://jresumebuiler.netlify.app/"
       },
      {
        name: "Expense Tracker",
        tech: "React JS Project",
        src: "./assets/img/project3.png",
        link:"https://expense-tracker-bymalik.netlify.app/"
       },
       {
        name: "Todo App",
        tech: "React JS Project",
        src: "./assets/img/project4.png",
        link:"https://noteyourtask.netlify.app/"
       },
       {
        name: "Exchange Rate",
        tech: "HTML/CSS and Javascript Project",
        src: "./assets/img/exchange.png",
        link:"https://malik786-git.github.io/Exchange-Rate-Calculator/"
       },
       {
        name: "RoboMeet Web page",
        tech: "HTML/CSS and Bootstrap Project",
        src: "./assets/img/robo.png",
        link:"https://malik786-git.github.io/RoboMeet/"
       },
       {
        name: "Quiz App",
        tech: "HTML/CSS and Javascript Project",
        src: "./assets/img/quiz.png",
        link:"https://malik786-git.github.io/New-Quiz-App/"
       }  
      
  ];

    return (
      <section className="container mt-5 p-5 work text-light">
      <PageHeading  content="my work" />
      <div className="col-10 text-center mt-5 py-5 mx-auto">
                   <h2 className="work-skill-heading menu-font">Project's</h2>
            </div>
      {/* project start */}
        <div className="row mx-auto row-1">
      
           {
            projectDescription.map((data, i)=> <Projects data = {data} key={i+1} /> )
              
           }
        </div>
      
        <div className="row">
            <div className="col-10 text-center mt-5 pt-5 mx-auto">
                   <h2 className="work-skill-heading menu-font">Skill's</h2>
                    <div className="skills-icons my-5 pt-5">
                       <figure className="text-center">
                        <img src="./assets/img/html.png" alt="" />
                        <img src="./assets/img/css.png" alt="" />
                        <img src="./assets/img/js.png" alt="" />
                        <img src="./assets/img/react.png" alt="" />
                        <img src="./assets/img/bootstrap.png" alt="" />
                        <img src="./assets/img/nodejs.png" alt="" />
                        <img src="./assets/img/express.png" alt="" />
                        <img src="./assets/img/mongo.png" alt="" />
                        <img src="./assets/img/sass.png" alt="" />
                        <img src="./assets/img/git.png" alt="" />
                        <img src="./assets/img/linux.png" alt="" />
                        <img src="./assets/img/docker.png" alt="" />
                       </figure>
                        </div>
            </div>
        </div>

{/* project end */}
       <div className="row mt-5"> 
        <Footer/>
        </div>
        <MyGithub/>
    </section>
    )
  }
  
  export default Work
  