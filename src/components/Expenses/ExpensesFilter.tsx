import { ChangeEventHandler, FunctionComponent } from "react";
import "./ExpensesFilter.scss";

type ExpensesFilterProp = {
  onFilterChange: (year: string) => void;
};

const ExpensesFilter: FunctionComponent<ExpensesFilterProp> = ({
  onFilterChange,
}) => {
  const dropDownChangeHandler: ChangeEventHandler<HTMLSelectElement> = (
    event
  ) => {
    onFilterChange(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <label>연도별 보기</label>
      <select
        name=''
        id=''
        className='expenses-filter__control'
        onChange={dropDownChangeHandler}
      >
        <option value='2022'>2022</option>
        <option value='2021'>2021</option>
        <option value='2020'>2020</option>
        <option value='2019'>2019</option>
      </select>
    </div>
  );
};

export default ExpensesFilter;
