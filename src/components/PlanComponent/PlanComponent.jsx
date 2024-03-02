import "./PlanComponent.css";

const PlanComponent = (props) => {
  return (
    <div>
      <div className="plan-component">
        <div className="gift-image d-flex flex-column align-items-center gap-2">
          <img src="./assets/standard.png" className="img img-fluid" alt="" />
          <h4 className="text-color">{props.plan}</h4>
        </div>
        <div className="plan-list para-color">
          <div className="d-flex align-items-center gap-2">
            <img src="./assets/plan-check.svg" className="plan-check" alt="" />
            <span>{props.planitem1}</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <img src="./assets/plan-check.svg" className="plan-check" alt="" />
            <span>{props.planitem2}</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <img src="./assets/plan-check.svg" className="plan-check" alt="" />
            <span>{props.planitem3}</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <img src="./assets/plan-check.svg" className="plan-check" alt="" />
            <span>{props.planitem4}</span>
          </div>
          {props.planitem5 && (
            <div className="d-flex align-items-center gap-2">
              <img
                src="./assets/plan-check.svg"
                className="plan-check"
                alt=""
              />
              <span>{props.planitem5}</span>
            </div>
          )}
          {props.planitem6 && (
            <div className="d-flex align-items-center gap-2">
              <img
                src="./assets/plan-check.svg"
                className="plan-check"
                alt=""
              />
              <span>{props.planitem6}</span>
            </div>
          )}
        </div>
        <div className="plan-button">
          <p className="fs-3">
            <span className="fw-bold text-color">{props.price}</span>
            <span className="para-color">{props.month}</span>
          </p>
          <button className="rounded-pill">Select</button>
        </div>
      </div>
    </div>
  );
};

export default PlanComponent;
