
import './index.css'
import {useSate} from 'react';
import {Link} from "react-router-dom";


const Navbar = () => {



  function handleHamburgerClick(){


     const body = document.querySelector("body");
   const navMenu = document.querySelector(".menu-content");

    if(navMenu.classList.contains("open")){
      navMenu.classList.remove("open");
      body.style.overflowY = "scroll";
    }else{
      navMenu.classList.add("open");
      body.style.overflowY = "hidden";
    }
  }

  return (
    <>
     <header className="header">
      <nav className="nav container flex">
        <Link to={"/"} className="logo-content">
         <i className='bx bxs-bowl-hot logo-icon'></i>
          <span className="logo-text">FoodFactory</span>
        </Link>

       <div className="menu-content">
         <ul className="menu-list flex">
           <li><Link to={"/"} className="nav-link active-navlink">Home</Link></li>
           <li><Link to={"/"} className="nav-link ">Contact</Link></li>
           <li><Link to={"/favorites"} className="nav-link "><i className='bx bx-cart'></i></Link></li>
         </ul>

         <div className="media-icons flex">
           <Link to={"https://www.facebook.com"}><i className='bx bxl-facebook'></i></Link>
           <Link to={"https://twitter.com/i/flow/login"}><i className='bx bxl-twitter' ></i></Link>
           <Link to={"https://www.instagram.com/accounts/login"}><i className='bx bxl-instagram-alt' ></i></Link>
           <Link to={"https://github.com/login"}><i className='bx bxl-github'></i></Link>
           <Link to={"https://www.youtube.com/login"}><i className='bx bxl-youtube'></i></Link>
         </div>

         <i className='bx bx-x navClose-btn' onClick={handleHamburgerClick}></i>
        </div>

       {/* <div className="contact-content flex">
         <i className='bx bx-phone phone-icon' ></i>
         <span className="phone-number">0022-0303-2030</span>
       </div> */}

       <i className='bx bx-menu navOpen-btn' onClick={handleHamburgerClick}></i>
      </nav>
  </header>

    </>
  )
}

export default Navbar
