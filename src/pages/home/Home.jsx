import Chart from "../../components/chart/Chart";
import FeaturesInfo from "../../components/featuresInfo/FeaturesInfo";
import VerticalSlider from "../../components/VerticalSlider/VerticalSlider";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import { userData } from "../../dummyData";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <div>
        <FeaturesInfo />
      </div>
      <div className="vslider">
        <VerticalSlider />
        <Chart
          data={userData}
          title="user analytics"
          grid
          dataKey="Active User"
        />
      </div>
      <div className="homeWidget">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
export default Home;
