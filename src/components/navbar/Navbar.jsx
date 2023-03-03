import { useRef } from "react";
import "./navbar.scss";

const Navbar = () => {
  const navMenu = useRef();
  const hamIcon = useRef();

  return (
    // <div className="navbar">
    //   <header>
    //     <div
    //       ref={navMenu}
    //       className="menu-collapsed"
    //       onClick={() => {
    //         navMenu.current.classList.toggle("menu-expanded");
    //       }}
    //     >
    //         {/* <a href="#" className="logo">
    //       <img className="logo" src="src/assets/logo.png" alt="" />
    //     </a> */}
    //       <div className="bar"></div>
    //       <nav>
    //         <ul>
    //           <li style={{ "--clr": "#00ade1" }} className="nav-link">
    //             <a href="#">About</a>
    //           </li>
    //           <li>
    //             <a href="#">About</a>
    //           </li>
    //           <li>
    //             <a href="#">Clients</a>
    //           </li>
    //           <li>
    //             <a href="#">Contact Us</a>
    //           </li>
    //         </ul>
    //       </nav>
    //     </div>

    //     {/* <input type="checkbox" id="menu-btn" className="menu-btn" />
    //     <label for="menu-btn" className="menu-icon">
    //       <span className="menu-icon__line"></span>
    //     </label>
    //     <ul className="nav-links">
    //       <li style={{'--clr': "#00ade1"}}  className="nav-link">
    //         <a href="#">About</a>
    //       </li>
    //       <li className="nav-link">
    //         <a href="#">Services</a>
    //       </li>
    //       <li className="nav-link">
    //         <a href="#">Contact</a>
    //       </li>
    //     </ul> */}
    //   </header>
    // </div>
    <nav class="navbar" className="menu-active">
  <div class="logo"><img src="https://upload.wikimedia.org/wikipedia/commons/2/23/AS_sample_logo.png" alt="LOGO" /></div>
  <div class="push-left">
    <button id="menu-toggler" data-class="menu-active" ref={hamIcon} class="hamburger" 
    // onClick={() => {hamIcon.current.classList.toggle('menu-active')}}
    >
      <span class="hamburger-line hamburger-line-top"></span>
      <span class="hamburger-line hamburger-line-middle"></span>
      <span class="hamburger-line hamburger-line-bottom"></span>
    </button>

    <ul id="primary-menu" class="menu nav-menu">
      <li class="menu-item current-menu-item"><a class="nav__link"  href="#">Home</a></li>
      <li class="menu-item dropdown"><a class="nav__link"  href="#">About</a>
         <ul class="sub-nav" >
          <li><a class="sub-nav__link" href="#">link 1</a></li>
          <li><a class="sub-nav__link" href="#">link 2</a></li>
          <li><a class="sub-nav__link" href="#">link 3 - long link - long link - long link</a></li>
        </ul>

      </li>
      <li class="menu-item dropdown"><a class="nav__link"  href="#">Contact</a>
        <ul class = "sub-nav">
          <li><a class="sub-nav__link"  href="#">link 1</a></li>
          <li><a class="sub-nav__link"  href="#">link 2</a></li>
          <li><a class="sub-nav__link"  href="#">link 3 - long link - long link - long link</a></li>
        </ul>
      </li>
      <li class="menu-item "><a class="nav__link"  href="#">Blog</a>
       
      </li>
    </ul>


  </div>
</nav>

  );
};

export default Navbar;
