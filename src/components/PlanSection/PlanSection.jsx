import "./PlanSection.css";
import PlanComponent from "../PlanComponent/PlanComponent";

const PlanSection = () => {
  return (
    <div className="container-fluid plan-section bg-color">
      <div className="container-md text-center">
        <div className="plan-section-head row">
          <h1 className="text-color fw-bold">Choose your plan</h1>
          <p className="para-color">
            Let's choose the package that is best for you and explore it happily
            and <br /> cheerfully.
          </p>
        </div>

        <div className="row">
          <div className="col-12 col-sm-12 col-md-4">
            <PlanComponent
              plan="Free Plan"
              planitem1="Unlimited Bandwidth"
              planitem2="Encrypted Connection"
              planitem3="No Traffic Logs"
              planitem4="Works on All Devices"
              price="Free"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-4">
            <PlanComponent
              plan="Standard Plan"
              planitem1="Unlimited Bandwidth"
              planitem2="Encrypted Connection"
              planitem3="No Traffic Logs"
              planitem4="Works on All Devices"
              planitem5="Connect AnyWhere"
              price="$9"
              month="/mo"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-4">
            <PlanComponent
              plan="Premium Plan"
              planitem1="Unlimited Bandwidth"
              planitem2="Encrypted Connection"
              planitem3="No Traffic Logs"
              planitem4="Works on All Devices"
              planitem5="Connect AnyWhere"
              planitem6="Get New Features"
              price="$12"
              month="/mo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanSection;
