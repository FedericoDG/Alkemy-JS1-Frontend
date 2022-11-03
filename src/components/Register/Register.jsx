import {Button} from '@mui/material'
import {Formik, Form} from 'formik'

import Input from '../Shared/Input'
import styles from '../Shared/reusable.module.css'

import validationSchema from './validationSchema'

const Register = () => (
  <Formik
    initialValues={{name: '', email: '', password: '', repeatPassword: ''}}
    validationSchema={validationSchema}
    onSubmit={(values) => console.log(values)}
  >
    {() => (
      <div className={styles.boxForm}>
        <Form className={styles.form}>
          <Input label="Name" name="name" placeholder="Your name" />
          <Input label="Email" name="email" placeholder="Your email" />
          <Input label="Password" name="password" placeholder="Password" type="password" />
          <Input
            label="Password"
            name="repeatPassword"
            placeholder="Repeat your password"
            type="password"
          />

          <Button className={styles.button} type="submit" variant="contained">
            Sign Up
          </Button>
        </Form>
      </div>
    )}
  </Formik>
)

export default Register
