import FormBlock from "./FormBlock"

interface Props extends React.PropsWithChildren {
  isActive: boolean;
  dismiss: Function;
}

const ErrorMessage: React.FC<Props> = (props) => {
  return (
    <FormBlock className={`${props.isActive ? 'block' : 'hidden'}`}>
      <div
        className="bg-red-100 py-2.5 px-3 rounded-md border-2 border-solid border-red-300 text-sm text-red-900 text-center"
        onClick={() => props.dismiss()}
      >
        <p>{props.children}</p>
      </div>
    </FormBlock>
  )
}

export default ErrorMessage;