import "./Features.css";

const Features = () => {
  return (
      <div className="container-fluid padding-container bg-white z-n1">
        <div className="container-xl">
          <div className="row py-5 d-flex px-1">
            <section className="right-section col-md-6 col-sm-12 text-center">
              <img
                src="./assets/sectionimg.png"
                className="heroimg img img-fluid"
                alt=""
              />
            </section>
            <section className="padding-section col-md-6 col-sm-12 d-flex flex-column">
              <div className="">
                <h1 className="text-color">
                  We Provide Many Features You Can Use
                </h1>
                <p className="para-color">
                  You can explore the features that we provide with fun and have
                  their own functions each feature.
                </p>
                <div className="lists para-color">
                  <div className="d-flex align-items-center gap-2">
                    <img src="./assets/check.svg" className="check" alt="" />
                    <span>Powerfull online protection.</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <img src="./assets/check.svg" className="check" alt="" />
                    <span>Internet without borders.</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <img src="./assets/check.svg" className="check" alt="" />
                    <span>Supercharged VPN.</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <img src="./assets/check.svg" className="check" alt="" />
                    <span>No specfic time limits.</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
  );
};

export default Features;
