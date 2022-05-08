import React, { useState } from "react";
import Chart from "../../components/chart/Chart";
import FeaturesInfo from "../../components/featuresInfo/FeaturesInfo";
import VerticalSlider from "../../components/VerticalSlider/VerticalSlider";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import { userData } from "../../dummyData";
import "./home.css";

export default function Home(props) {
  const [sliderValue, setSliderValue] = useState(1);
  const getSliderValue = (value) => {
    setSliderValue(value);
  };

  const calculateNewMonth = (month) => {
    const activeUserValue = sliderValue * month["Active User"];
    const newMonthValue = { ...month, "Active User": activeUserValue };

    return newMonthValue;
  };

  const userDataTransform = userData.map(calculateNewMonth);
  return (
    <div className="home">
      <FeaturesInfo />
      <div className="chartSliderContainer">
        <VerticalSlider onValueSet={getSliderValue} className="chartSlider" />
        <Chart
          data={userDataTransform}
          title="User Analytics"
          grid
          dataKey="Active User"
        ></Chart>
      </div>
      <div className="homeWidgets">
        <WidgetSm></WidgetSm>
        <WidgetLg></WidgetLg>
      </div>
    </div>
  );
}
