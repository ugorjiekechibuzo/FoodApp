import './index.css'
import {Link} from "react-router-dom";

const Footer = () => {
  return (

    <>
     <footer>
        <div className="main-content">
          <div className="left box">
           <h2>About us</h2>
           <div className="content">
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ad minus eum pariatur dolor adipisci voluptatibus fugit veritatis, delectus quod hic reprehenderit expedita accusamus excepturi tenetur culpa. Ullam, dolores quam.</p>
             <div className="social">
              <Link to={"https://www.facebook.com"}><i className='bx bxl-facebook'></i></Link>
              <Link to={"https://twitter.com/i/flow/login"}><i className='bx bxl-twitter' ></i></Link>
              <Link to={"https://www.instagram.com/accounts/login"}><i className='bx bxl-instagram-alt' ></i></Link>
              <Link to={"https://github.com/login"}><i className='bx bxl-github'></i></Link>
              <Link to={"https://www.youtube.com/login"}><i className='bx bxl-youtube'></i></Link>
             </div>
            </div>
          </div>


          <div className="center box">
           <h2>Address</h2>
            <div className="content">
             <div className="place">
               <span className="fas fa-map-marker-alt"></span>
               <span className="text">Birendranagar, Surkhet</span>
              </div>
              <div className="phone">
               <span className="fas fa-phone-alt"></span>
               <span className="text">+089-765432100</span>
              </div>
              <div className="email">
               <span className="fas fa-envelope"></span>
               <span className="text">abc@example.com</span>
              </div>
            </div>
          </div>

          <div className='right box'>
            <h2>Contact us</h2>
            <div className='content'>
              <form action="#">
                <div className="email">
                  <div className='text'>Email *</div>
                  <input type="email" required/>
                </div>

                <div className="msg">
                  <div className="text">Message *</div>
                  <textarea rows="2" cols="25" required></textarea>
                </div>

                <div className="btn">
                  <button type="submit">Send</button>
                </div>
              </form>
            </div>
          </div>

        </div>

        <div className="bottom">
          <center>
            <span className="credit">Created By <a href>Eke Ugorji</a> | </span>
            <span class="far fa-copyright"></span><span> 2024 All rights reserved.</span>
          </center>
        </div>
      </footer>

    </>
  )
}

export default Footer
