const AboutComponent = () => {
    const aboutMe = [
        "UIUX and experience designer based in NYC",
        "Born and raised in Beijing, China",
        "Recent graduate of Pratt Institute BFA in Communications Design, pursuing a Master degree in Human-Computer Interaction at Carnegie Mellon at the moment",
        "Have a passion for designing meaningful experiences for people"
    ];
  return (


    <div className="col-xxl-12 col-12 mx-auto">
         <ul>
             {
                 aboutMe.map((data, key)=>{
                     return <li key={key}>{data}</li>
                    })
            }
        </ul>   
    </div>
            
               
  )
}

export default AboutComponent
