import { FunctionComponent } from "react";
import "./Chart.scss";
import ChartBar from "./ChartBar";

interface Props {
  dataPoints: Array<{
    label: string;
    value: number;
  }>;
}

const Chart: FunctionComponent<Props> = ({ dataPoints }) => {
  const dataPointsValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointsValues);
  return (
    <div className='chart'>
      {dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
