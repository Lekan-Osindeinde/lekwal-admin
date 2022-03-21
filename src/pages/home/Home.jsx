import Chart from "../../components/chart/Chart";
import FeaturesInfo from "../../components/featuresInfo/FeaturesInfo";
import "./home.css";
function Home() {
  return (
    <div className="home">
      <FeaturesInfo />
      <Chart />
    </div>
  );
}
export default Home;
