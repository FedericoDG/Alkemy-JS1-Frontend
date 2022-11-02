import {Formik, Form} from 'formik'

import Input from '../Shared/Input'

import validationSchema from './validationSchema'

const Register = () => (
  <Formik
    initialValues={{name: '', email: '', password1: '', password2: ''}}
    validationSchema={validationSchema}
    onSubmit={(values) => console.log(values)}
  >
    {() => (
      <Form>
        <Input label="Name" name="name" placeholder="Your name" />
        <Input label="Email" name="email" placeholder="Your email" />
        <Input label="Password" name="password" placeholder="Password" type="password" />
        <Input
          label="Password"
          name="repeatPassword"
          placeholder="Repeat your password"
          type="password"
        />

        <button type="submit">Sign Up</button>
      </Form>
    )}
  </Formik>
)

export default Register
