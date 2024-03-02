import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="container-fluid bg-white">
      <div className="container-xl padding-container">
        <div className="row py-5 d-flex px-1">
          <section className="left-section order-2 order-md-1 col-md-6 col-sm-12 d-flex flex-column">
            <div className="content">
              <h1 className="display-5 lh-base">
                Want anything to be easy with <strong>LaslesVPN</strong>
              </h1>
              <p>
                Provide a network for all your needs with ease and fun using
                LaslesVPN discover interesting features from us.
              </p>
              <button className="custom-button">Get Started</button>
            </div>
          </section>
          <section className="right-section order-1 order-md-2 col-md-6 col-sm-12 text-center">
            <img
              src="./assets/heroimg.svg"
              className="heroimg img img-fluid"
              alt=""
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
