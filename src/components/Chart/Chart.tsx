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
  // ChartBar에 넘겨줄 데이터 : key(월), maxValue, value, label(월)

  return (
    <div className='chart'>
      <ChartBar />
    </div>
  );
};

export default Chart;
