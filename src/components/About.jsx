import PageHeading from "./PageHeading"
import MyGithub from "./MyGithub"
import AboutComponent from "./AboutComponents/AboutComponent";
import Ilove from "./AboutComponents/Ilove";

const About = () => {
    return (
      <div className="container about text-light">
        <PageHeading  content="about" />
          <div className="row mx-auto">
              <div className="col-xxl-8 col-10 mx-auto">
                       <h1 className="about-main-heading menu-font">
                           Hello, <br />
                           it's <br />
                           M. Jahangir <br />
                           here
                        </h1>         
              </div>
              <div className="col-xxl-8 col-10 mx-auto mypic">
             
                <figure>
                  <img src="./assets/img/mypic.jpeg" alt="" />
                  <div className="meet-me">
                    <span>Meet me</span>
                    <div className="line"></div>
                  </div>
                </figure>
             
              </div>
          </div>
          <div className="row">
          <AboutComponent/>
          <Ilove/>
          </div>
          <MyGithub/>
      </div>
    )
  }
  
  export default About;
  