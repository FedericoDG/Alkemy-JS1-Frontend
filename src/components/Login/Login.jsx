import {Button} from '@mui/material'
import {Formik, Form} from 'formik'

import Input from '../Shared/Input'

import validationSchema from './validationSchema'
import styles from './login.module.css'

const Login = () => (
  <Formik
    initialValues={{name: '', email: '', password1: '', password2: ''}}
    validationSchema={validationSchema}
    onSubmit={(values) => console.log(values)}
  >
    {() => (
      <div className={styles.boxForm}>
        <Form className={styles.form}>
          <Input label="Email" name="email" placeholder="Your email" />
          <Input label="Password" name="password" placeholder="Password" type="password" />

          <Button className={styles.button} type="submit" variant="contained">
            Sign In
          </Button>
        </Form>
      </div>
    )}
  </Formik>
)

export default Login
