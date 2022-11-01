const AboutComponent = () => {
    const aboutMe = [
        "🗯 Freelance Software Engineer and a full stack developer based in Karachi",
        "🗯 Born and raised in Karachi, Pakistan",
        "🗯 Recent graduate of Dawood University of Engineering and Technology in Computer Science",
        "🗯 I love to create websites with modern outlook and perfect responsiveness",
        "🗯 Have a passion for programming and coding"
    ];
  return (


    <div className="aboutlist col-xxl-8 col-10 mx-auto py-3 railway-light pe-sm-0 pe-5">
         <ul>
             {
                 aboutMe.map((data, key)=>{
                     return  <li key={key}>{data}</li>
                    })
            }
        </ul>   
    </div>
            
               
  )
}

export default AboutComponent
