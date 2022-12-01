import "./Input.scss";
import { ChangeEventHandler, KeyboardEventHandler, useRef } from "react";
import { useImperativeHandle } from "react";
import { forwardRef } from "react";

interface Props {
  type: string;
  label: string;
  value?: string;
  min?: string;
  max?: string;
  onKeydown?: KeyboardEventHandler<HTMLInputElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export type InputRefHandle = {
  activate: () => void;
};
const Input = forwardRef<InputRefHandle, Props>(
  ({ type, value, onChange, label, min, max, onKeydown }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => {
      return {
        activate() {
          inputRef.current?.focus();
        },
      };
    });

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
          ref={inputRef}
        />
      </div>
    );
  }
);

export default Input;
