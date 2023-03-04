import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ErrorMessage from "./Forms/ErrorMessage";
import Form from "./Forms/Form";
import FormBlock from "./Forms/FormBlock";
import FormButton from "./Forms/FormButton";
import FormLink from "./Forms/FormLink";
import TextField from "./Forms/FormTextField";
import InlineCheckboxField from "./Forms/InlineCheckboxField";

interface LoginFields {
  email: string;
  password: string;
  remember: boolean;
}

const LoginForm: React.FC = (props) => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<LoginFields>();

  const onSubmit: SubmitHandler<LoginFields> = data => console.log(data);

  console.log(watch("example"));

  /* NOTE: This is a state for managing vibility of error message */
  const [hasErrors, setHasErrors] = useState<boolean>(false);

  /* NOTE: This is state for managing the text for the error message */
  const [errorMsg, setErrorMsg] = useState<string>("");

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>

      <h1 className="text-3xl font-bold"> Hello 👋 </h1>

      <p className="text-sm font-medium text-gray-400 my-2">
        Let&apos;s keep track of your energy usage.
      </p>

      <ErrorMessage isActive={hasErrors} dismiss={() => setHasErrors(false)}>
        {errorMsg}
      </ErrorMessage>

      <TextField
        type="email"
        name="email"
        label="Email"
        ref={register("email", { required: true })}
      />

      <TextField
        type="password"
        name="password"
        label="Password"
      />

      <FormBlock className="flex items-center gap-1.5 justify-between">
        <InlineCheckboxField label="Remember me" name="remember" />
        <FormLink text="I forgot my password" link="#forgot-password" />
      </FormBlock>

      <FormButton
        text={isSubmitting ? "Signing in..." : "Login"}
        type="button"
        showLoadingIcon={isSubmitting}
        clickHandler={handleSubmit}
      />

      <FormBlock>
        <p className="text-sm text-center">
          Don&apos;t have an account? <FormLink text="Sign up here" link="/signup" />
        </p>
      </FormBlock>
    </Form>
  )
}

export default LoginForm;