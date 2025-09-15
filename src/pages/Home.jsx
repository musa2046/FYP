import { Link } from "react-router-dom"
import CTA from "../components/CTA"

export default function Home(){
    return(
        <>
        {/* ********************HERO*********************** */}
          <div className="container-fluid hero">
           <div className="container d-flex position-relative z-2 flex-column align-items-start gap-4 justify-space-between">
            <h1 className="fw-bolder display-4" >Standing for <span style={{color: " #037c3e"}}> YOUTH</span></h1>
            <p className="lead">We are leading the political platform for young minds.</p>
            <CTA text="Join FYP Now" path="/membership" />
           </div>
          </div> 
        {/* ********************About*********************** */}
        <div className="container-fluid py-5 " style={{backgroundColor: "#FAF3DD"}}>
          <div className="container d-flex">
            <div className="d-flex flex-column justify-space-between align-items-start gap-5">
              <h1 className="fw-bold">About FYP</h1>
              <p className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae totam natus tenetur voluptatibus sequi incidunt sunt rem, ea voluptate suscipit dolore cumque at voluptas repellat!</p>
                <CTA text="Read More" path="/about"/>
                          </div>
            <img src="public\images\about-img.jpg " className="w-50  rounded" alt="" />
          </div>
        </div>
        {/* ********************Programs*********************** */}
        <div className="container-fluid py-5 " style={{backgroundColor: "#FAF3DD"}}>
          <div className="container">

              <h1 className="fw-bold">Our Programs</h1>
             
            <div className="card shadow-sm" style={{ width: "18rem" }}>
              <img src="public\images\bg2.jpg" className="card-img-top img-fluid" alt="..."  style={{ height: "180px", objectFit: "cover" }} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>

          </div>
        </div>




        </>
    )
}