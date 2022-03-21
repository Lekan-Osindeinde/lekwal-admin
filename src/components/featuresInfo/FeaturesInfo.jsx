import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./featuresInfo.css";

function FeaturesInfo() {
  return (
    <div className="features">
      <div className="featuresItem">
        <span className="featuresTitle">Revenue</span>
        <div className="featuresMoneyContainer">
          <span className="featuresMoney">$2,145</span>
          <span className="featuresMoneyRate">
            -11.4 <ArrowDownward className="featuresIcon negative" />
          </span>
        </div>
        <span className="featuresSub">Compare to last month</span>
      </div>
      <div className="featuresItem">
        <span className="featuresTitle">Sales</span>
        <div className="featuresMoneyContainer">
          <span className="featuresMoney">$4,145</span>
          <span className="featuresMoneyRate">
            -1.4 <ArrowDownward className="featuresIcon negative" />
          </span>
        </div>
        <span className="featuresSub">Compare to last month</span>
      </div>
      <div className="featuresItem">
        <span className="featuresTitle">Cost</span>
        <div className="featuresMoneyContainer">
          <span className="featuresMoney">$2,145</span>
          <span className="featuresMoneyRate">
            +2.4 <ArrowUpward className="featuresIcon" />
          </span>
        </div>
        <span className="featuresSub">Compare to last month</span>
      </div>
    </div>
  );
}
export default FeaturesInfo;
