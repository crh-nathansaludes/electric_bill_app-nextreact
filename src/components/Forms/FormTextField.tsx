import { LegacyRef } from "react";
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import FormBlock from "./FormBlock";

interface TextFieldProps {
  name: string;
  type: "text" | "email" | "password";
  placeholderText?: string;
  label?: string;
  required?: boolean;
  showErrorMessage?: boolean;
  ref: LegacyRef<HTMLInputElement>
}

const TextField: React.FC<TextFieldProps> = (props) => {

  return (
    <FormBlock>
      {
        props.label
          ? (
            <label className="text-sm font-medium block mb-0.5" htmlFor={props.name}>
              {props.label} {props.required ? <span className="text-md text-red-500">*</span> : null}
            </label>
          )
          : null
      }
      <input
        className={`form-input ${meta.error ? 'border-red-400' : 'border-slate-300'}
          outline-gray-400 border-2 border-solid rounded-md w-full p-2
          focus:ring-0 focus:outline-0 focus:border-slate-400`}
        ref={props.ref}
        type={props.type}
        name={props.name}
        placeholder={props.placeholderText}
        onChange={field.onChange}
      />
      {meta.touched && meta.error ? (
        <span className="text-xs text-red-600 font-semibold">{meta.error}</span>
      ) : null}
    </FormBlock>
  )
}

const InputField = React.forwardRef<HTMLInputElement, { label: string } & ReturnType<UseFormRegister<{}>>

export default TextField;