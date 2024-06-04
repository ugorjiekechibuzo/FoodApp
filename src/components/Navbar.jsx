
import './index.css'
import {useSate} from 'react'


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
        <a href="" className="logo-content">
         <i className='bx bxs-bowl-hot logo-icon'></i>
          <span className="logo-text">FoodFactory</span>
        </a>

       <div className="menu-content">
         <ul className="menu-list flex">
           <li><a href="" className="nav-link active-navlink">Home</a></li>
           <li><a href="" className="nav-link ">Contact</a></li>
           <li><a href="" className="nav-link "><i className='bx bx-cart'></i></a></li>
         </ul>

         <div className="media-icons flex">
           <a href="https://www.facebook.com"><i className='bx bxl-facebook'></i></a>
           <a href="https://twitter.com/i/flow/login"><i className='bx bxl-twitter' ></i></a>
           <a href="https://www.instagram.com/accounts/login"><i className='bx bxl-instagram-alt' ></i></a>
           <a href="https://github.com/login"><i className='bx bxl-github'></i></a>
           <a href="https://www.youtube.com/login"><i className='bx bxl-youtube'></i></a>
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
