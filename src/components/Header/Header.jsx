import "./Header.css";
import SideBar from "../SideBar/SideBar";

const Header = () => {
  return (
    <div className="bg-white main">
      <nav className="container-xl d-flex align-items-center">
        <div className="logo col-10 col-sm-10 col-md-10 col-lg-3 col-xl-3">
          <img src="./assets/logo.svg" alt="" />
        </div>
        <div className="links col-lg-6 col-xl-6">
          <ul className="d-flex align-items-center gap-5">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
        </div>

        <div className="account col-lg-3 col-xl-3">
          <button className="signin rounded-pill">Sign In</button>
          <button className="signup rounded-pill">Sign Up</button>
        </div>

        <div className="sidebar col-2 col-sm-2 ms-2">
         <SideBar />
        </div>
      </nav>
    </div>
  );
};

export default Header;
