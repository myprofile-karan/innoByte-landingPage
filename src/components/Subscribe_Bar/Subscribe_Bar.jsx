import "./Subscribe_Bar.css";

const Subscribe_Bar = () => {
  return (
    <div className="subscribe container-xl shadow-sm bg-white rounded-lg">
      <div className="row">
        <div className="col-12 col-sm-6 d-flex flex-column align-items-center align-items-sm-start">
            <h6 className="text-color fw-bold">Subscribe Now for get Special Features!</h6>
            <p className="para-color">Let's subscribe with us and find the fun.</p>
        </div>
        <div className="col-12 col-sm-6 d-flex justify-content-center align-items-center">
            <button className="custom-button">Subscribe Now</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe_Bar;
