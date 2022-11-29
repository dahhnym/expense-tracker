import { FunctionComponent } from "react";
import "./Chart.scss";
import ChartBar from "./ChartBar";

type ChartProp = {
  selectedYear: string;
};

const Chart: FunctionComponent<ChartProp> = (selectedYear) => {
  return (
    <div>
      <ChartBar />
    </div>
  );
};

export default Chart;
