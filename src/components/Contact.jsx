import Footer from "./Footer/Footer"
import MyGithub from "./MyGithub"
import PageHeading from "./PageHeading"


const Contact = () => {
    return (
      <>
      <div className="container-fluid contact-wrapped">
        <PageHeading content="contact"/>
              <div className="contact text-center railway-light">
                    <ul>
                      <li><a href="https://www.linkedin.com/in/malik-muhammad-jahangir-7987901b7/" target="blank">LinkedIn</a></li>
                      <li><a href="https://twitter.com/malikmu63647973" target="blank">Twitter</a></li>
                    </ul>
                      <br />
                      <div className="mail-whatsapp">
                         <span>malikmuhammadjahangir786@gmail.com</span>
                         <br />
                         <span><i className="fa fa-whatsapp" aria-hidden="true"></i> +92 31 02063864</span>
                      </div>
              </div>
              <MyGithub/>
      </div>
              <Footer/>
      </>
    )
  }
  
  export default Contact
  