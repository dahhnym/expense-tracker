import { FunctionComponent } from "react";
import "./ChartBar.scss";

interface Props {
  value: number;
  maxValue: number;
  label: string;
}

const ChartBar: FunctionComponent<Props> = ({ value, maxValue, label }) => {
  let barFillHeight = "0%";

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }

  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div className='chart-bar__tooltip'>
          {value > 0 && `${value.toLocaleString()}원`}
        </div>
        <div
          className='chart-bar__fill'
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className='chart-bar__label'>{label}</div>
    </div>
  );
};

export default ChartBar;
