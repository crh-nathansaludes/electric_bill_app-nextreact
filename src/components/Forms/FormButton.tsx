import { Component, EventHandler, MouseEventHandler } from "react";
import { RiLoader4Line } from "react-icons/ri"
import FormBlock from "./FormBlock";

interface FormButtonProps {
  text: string;
  type?: "button" | "reset" | "submit";
  clickHandler?: MouseEventHandler;
  showLoadingIcon?: boolean;
  icon?: any;
}

const FormButton: React.FC<FormButtonProps> = (props) => {
  const { type = "button" } = props;
  return (
    <FormBlock>
      <button
        className="flex items-center justify-center text-md bg-lime-600/95 text-white font-medium rounded-md w-full py-2 active:bg-lime-500"
        type={type}
        onClick={props.clickHandler}
      >
        <div className="icon-slot inline-block mr-1.5">
          { props.showLoadingIcon
            ? <RiLoader4Line className="text-lg animate-spin" />
            : (props.icon)
          }
        </div>
        {props.text}
      </button>
    </FormBlock>
  );
}

export default FormButton;