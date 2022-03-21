import Chart from "../../components/chart/Chart";
import FeaturesInfo from "../../components/featuresInfo/FeaturesInfo";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import { userData } from "../../dummyData";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <FeaturesInfo />
      <Chart data={userData} title="user analytics" dataKey="Active User" />
      <div className="homeWidget">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
export default Home;
