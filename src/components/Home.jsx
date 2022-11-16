import { NavLink } from "react-router-dom";
import Footer from "./Footer/Footer";
import MyGithub from "./MyGithub";
import PageHeading from "./PageHeading";

const Home = () => {
  return (
    <>
     <PageHeading  content="Home" />
    <div className="container home railway-light text-light">
      <h1 className="px-sm-0 px-5 mx-sm-0 mx-5">
        Hi! I am Freelance Software Engineer and full stack developer based in Karachi. Here you can
        see some of my latest <NavLink className="home-anchor" to="/work" >work</NavLink>.
        <br />
        <br />

        <span className="home-span">
        Feel free to snoop around on my SOCIAL MEDIA. For inquiries or a how you
        doing <NavLink className="home-anchor" to="/work" >contact</NavLink> me, I will be happy to hear from you.
        </span>
        <br />
        <br />
        If this wasn't enough for you no worries! you can also find out
        more <NavLink className="home-anchor" to="/work" >about</NavLink> me here ;{" )"}
      </h1>
    </div>
      <MyGithub/>
     <Footer/>
    </>
  );
};

export default Home;
