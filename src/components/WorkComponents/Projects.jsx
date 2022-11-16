const Projects = ({data}) => {
    const {name, tech, src, link} = data;

  return (

  <div className=" col-10 mx-auto  project-div  my-5">
    <div className="project-content text-center">
      <div className="project-about railway-light">
      <h1 className="railway-bold">{name}</h1>
       <h5>{tech}</h5>
       <br />
       <span><a href={link} target="blank">View</a> </span>
      </div>
    </div>
      <figure>
        <img  className="projectImg" src={src} alt="" />
      </figure>
  </div> 
  )
}

export default Projects;