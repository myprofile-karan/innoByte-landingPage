import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-fluid footer bg-color">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-5">
            <div className="footer-first d-flex flex-column align-items-center align-items-sm-start">
              <img src="./assets/logo.svg" alt="" />
              <p className="fs-6 para-color pe-5 my-4">
                <strong>Lasles VPN </strong>is a private virtual network that
                <br />
                has unique features and has high security.
              </p>
              <div className="font-icons">
                <a href="#">
                  <img
                    src="./assets/facebook.png"
                    className="object-fit-contain"
                    alt=""
                  />
                </a>
                <a href="#">
                  <img
                    src="./assets/twitter.png"
                    className="object-fit-contain"
                    alt=""
                  />
                </a>
                <a href="#">
                  <img
                    src="./assets/instagram.png"
                    className="object-fit-contain"
                    alt=""
                  />
                </a>
              </div>
              <span className="para-color fs-5 opacity-25">
                &copy;2020LaslesVPN
              </span>
            </div>
          </div>
          <div className="col-12 col-sm-7">
            <div className="row">
              <div className="col-4 d-flex flex-column align-items-center align-items-sm-start">
                <span className="fs-5 fw-bold">Products</span>
                <div className="footer-links d-flex flex-column align-items-center align-items-sm-start gap-2">
                  <a href="">Download</a>
                  <a href="">Pricing</a>
                  <a href="">Locations</a>
                  <a href="">Servers</a>
                  <a href="">Countries</a>
                  <a href="">Blog</a>
                </div>
              </div>
              <div className="col-4 d-flex flex-column align-items-center align-items-sm-start">
                <span className="fs-5 fw-bold">Engage</span>
                <div className="footer-links d-flex flex-column align-items-center align-items-sm-start gap-2">
                  <a href="">LaslesVPN?</a>
                  <a href="">FAQ</a>
                  <a href="">Tutorials</a>
                  <a href="">About Us</a>
                  <a href="">Privacy Policy</a>
                  <a href="">Terms of Services</a>
                </div>
              </div>
              <div className="col-4 d-flex flex-column align-items-center align-items-sm-start">
                <span className="fs-5 fw-bold">Earn Money</span>
                <div className="footer-links d-flex flex-column align-items-center align-items-sm-start gap-2">
                  <a href="">Affiliate</a>
                  <a href="">Become Partner</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
