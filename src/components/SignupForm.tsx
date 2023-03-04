import { FormikHelpers, useFormik } from "formik";
import ErrorMessage from "./Forms/ErrorMessage";
import Form from "./Forms/Form";
import FormBlock from "./Forms/FormBlock";
import FormButton from "./Forms/FormButton";
import FormLink from "./Forms/FormLink";
import TextField from "./Forms/FormTextField";
import * as Yup from "yup";

interface SignupFields {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirm_password: string;
}

const SignupForm: React.FC = (props) => {

  return (
    <Form onSubmit={handleSubmit}>
      <h1 className="text-3xl font-bold">
        Create your account
      </h1>
      <p className="text-sm font-medium text-gray-400 my-2">
        Enter your information below to manage your own energy usage.
      </p>

      <ErrorMessage isActive={true} dismiss={() => { }}>
        Test error message
      </ErrorMessage>

      <TextField
        type="text"
        name="firstname"
        label="First name"
        required={true}
      />
      <TextField
        type="text"
        name="lastname"
        label="Last name"
        required={true}
      />
      <TextField
        type="email"
        name="email"
        label="Email"
        required={true}
      />
      <TextField
        type="password"
        name="password"
        label="Password"
        required={true}
      />
      <TextField
        type="password"
        name="confirm_password"
        label="Confirm password"
        required={true}
      />

      <FormButton
        text={isSubmitting ? "Checking..." : "Create account"}
        type="button"
        showLoadingIcon={isSubmitting}
        clickHandler={handleSubmit}
      />

      <FormBlock>
        <p className="text-sm text-center">
          Already have an account? <FormLink text="Login here" link="/login" />
        </p>
      </FormBlock>
    </Form>
  )
}

export default SignupForm;