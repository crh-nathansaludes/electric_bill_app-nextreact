import { HTMLAttributeAnchorTarget } from "react";

interface Props {
  text: string;
  link?: string;
  target?: HTMLAttributeAnchorTarget;
}

const FormLink: React.FC<Props> = (props) => {
  return (
    <a className="text-sm font-medium text-gray-400 underline underline-offset-2 decoration text-right" href={props.link || ""} target={props.target || "_self"}>
      { props.text }
    </a>
  )
}

export default FormLink;