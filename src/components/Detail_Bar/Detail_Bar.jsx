import "./Detail_Bar.css";

const Detail_Bar = () => {
  return (
    <div className="container-lg detail-container bg-white text-center rounded-lg my-5">
      <div className="row py-2 gy-3">
        <div className="col-6 col-sm-4">
          <div className="detail-center w-full d-flex justify-content-start justify-content-sm-center gap-4">
            <img src="./assets/user.png" alt="" />
            <div className="info d-flex flex-column text-center text-color">
              <span className="fs-3">
                <strong>90+</strong>
              </span>
              <span className="text-secondary">Users</span>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4">
          <div className="detail-center w-full d-flex justify-content-start justify-content-sm-center gap-4">
            <img src="./assets/location.png" alt="" />
            <div className="info d-flex flex-column text-center text-color">
              <span className="fs-3">
                <strong>30+</strong>
              </span>
              <span className="text-secondary">Location</span>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4">
          <div className="detail-center w-full d-flex justify-content-start justify-content-sm-center gap-4">
            <img src="./assets/server.png" alt="" />
            <div className="info d-flex flex-column text-center text-color">
              <span className="fs-3">
                <strong>50+</strong>
              </span>
              <span className="text-secondary">Servers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail_Bar;
