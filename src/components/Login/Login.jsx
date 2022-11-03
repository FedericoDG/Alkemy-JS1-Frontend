import {Button} from '@mui/material'
import {Formik, Form} from 'formik'
import {useDispatch, useSelector} from 'react-redux'

import {authLogin} from '../../app/authSlice'
import Input from '../Shared/Input'
import styles from '../Shared/reusable.module.css'

import validationSchemaLogin from './validationSchema'

const Login = () => {
  const {auth} = useSelector((state) => state)

  const {loading} = auth

  const dispatch = useDispatch()

  return (
    <Formik
      initialValues={{name: '', email: '', password: ''}}
      validationSchema={validationSchemaLogin}
      onSubmit={(values) => dispatch(authLogin(values))}
    >
      {() => (
        <div className={styles.boxForm}>
          <Form className={styles.form}>
            <Input label="Email" name="email" placeholder="Your email" />
            <Input label="Password" name="password" placeholder="Password" type="password" />

            <Button className={styles.button} disabled={loading} type="submit" variant="contained">
              Sign In
            </Button>
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default Login
