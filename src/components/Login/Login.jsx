import {Avatar, Button, Stack, Grid, Box, Typography, Container} from '@mui/material'
import {Formik, Form, ErrorMessage} from 'formik'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

import {authLogin} from '../../app/authSlice'
import CustomTextField from '../Forms/CustomTextField'
import FormError from '../Forms/FormError'

import validationSchemaLogin from './validationSchema'

const SignIn = () => {
  const {auth} = useSelector((state) => state)

  const {loading} = auth

  const dispatch = useDispatch()

  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validationSchema={validationSchemaLogin}
      onSubmit={(values) => dispatch(authLogin(values))}
    >
      <Container
        maxWidth="sm"
        sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography color="primary" component="h1" variant="h2">
            Alkybank
          </Typography>
          <Typography component="h1" variant="h6">
            Ingresar
          </Typography>
          <Box sx={{mt: 1}}>
            <Form style={{width: '100%'}}>
              <Stack p={1} spacing={1}>
                <CustomTextField label="Email" name="email" style={{width: 360}} />
                <ErrorMessage component={FormError} name="email" />
                <CustomTextField
                  fullWidth
                  label="Contraseña"
                  name="password"
                  style={{width: 360}}
                  type="password"
                />
                <ErrorMessage component={FormError} name="password" />
                <Button disabled={loading} type="submit" variant="contained">
                  Ingresar
                </Button>
              </Stack>
            </Form>
            <Grid container justifyContent="center">
              <Grid item>
                <Link style={{textDecoration: 'none'}} to="/register" variant="body2">
                  ¿No tiene cuenta? Regístrate
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Formik>
  )
}

export default SignIn
