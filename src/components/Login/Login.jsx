import {Formik, Form} from 'formik'

import Input from '../Shared/Input'

import validationSchema from './validationSchema'

const Login = () => (
  <Formik
    initialValues={{name: '', email: '', password1: '', password2: ''}}
    validationSchema={validationSchema}
    onSubmit={(values) => console.log(values)}
  >
    {() => (
      <Form>
        <Input label="Email" name="email" placeholder="Your email" />
        <Input label="Password" name="password" placeholder="Password" type="password" />

        <button type="submit">Sign In</button>
      </Form>
    )}
  </Formik>
)

export default Login
