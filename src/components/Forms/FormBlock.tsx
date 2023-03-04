interface Props extends React.PropsWithChildren {
  className?: string;
}

const FormBlock: React.FC<Props> = (props) => {
  return (
    <div className={"my-5" + (props.className ? ` ${props.className}` : "")}>
      {props.children}
    </div>
  )
}

export default FormBlock;