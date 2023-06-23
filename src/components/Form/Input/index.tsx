import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { StyledInputContainer } from "../../../styles/form";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  type: string;
}

const Input = forwardRef(
  (
    { id, label, type, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div>
        <StyledInputContainer>
          <input ref={ref} {...rest} type={type} id={id} />
          <label htmlFor={id}>{label}</label>
        </StyledInputContainer>
      </div>
    );
  }
);

export default Input;
