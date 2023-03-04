interface Props extends React.PropsWithChildren {
  onSubmit?: () => any;
}

const Form: React.FC<Props> = (props) => {
  return (
    <form className="block w-96 p-5" onSubmit={props.onSubmit}>
      {props.children}
    </form>
  )
}

export default Form;