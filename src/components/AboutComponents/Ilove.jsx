const Ilove = () => {
 
    const I_Love = [
        "Chess ♞",
        "Travelling 🚞",
        "Programming 💻",
        "Teaching Tech 🖧"
    ];
  return (


    <div className="aboutlist col-xxl-8 col-10 mx-auto py-3 menu-font">
      <h1 className="I-love">I <i className="fa fa-heart" aria-hidden="true"></i></h1>
         <ul>
             {
                 I_Love.map((data, key)=>{
                     return  <li key={key}>{data}</li>
                    })
            }
        </ul>   
    </div>
               
  )

}

export default Ilove
