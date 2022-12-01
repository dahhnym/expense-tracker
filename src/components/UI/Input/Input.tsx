import "./Input.scss";
import {
  ChangeEventHandler,
  FunctionComponent,
  KeyboardEventHandler,
} from "react";

interface Props {
  type: string;
  label: string;
  value?: string;
  min?: string;
  max?: string;
  onKeydown?: KeyboardEventHandler<HTMLInputElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Input: FunctionComponent<Props> = ({
  type,
  value,
  onChange,
  label,
  min,
  max,
  onKeydown,
}) => {
  return (
    <div className='new-expense__control'>
      <label htmlFor=''>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
        onKeyDown={onKeydown}
      />
    </div>
  );
};

export default Input;
