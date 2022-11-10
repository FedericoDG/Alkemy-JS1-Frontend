import {Avatar, Button, Stack, Grid, Box, Typography, Container} from '@mui/material'
import {Formik, Form, ErrorMessage} from 'formik'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

import {useCreateUser} from '../../hooks/useUsers'
import CustomTextField from '../Forms/CustomTextField'
import FormError from '../Forms/FormError'

import validationSchema from './validationSchema'

const Register = () => {
  const {auth} = useSelector((state) => state)

  const {mutate: createUser} = useCreateUser()

  const {loading} = auth

  return (
    <Formik
      initialValues={{firstName: '', lastName: '', email: '', password: '', repeatPassword: ''}}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        createUser(values)
      }}
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
          <Avatar sx={{m: 1, bgcolor: 'primary.main'}}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registrarse
          </Typography>
          <Box sx={{mt: 1}}>
            <Form style={{width: '100%'}}>
              <Stack p={1} spacing={1}>
                <CustomTextField label="Nombre" name="firstName" style={{width: 360}} />
                <ErrorMessage component={FormError} name="firstName" />
                <CustomTextField label="Apellido" name="lastName" style={{width: 360}} />
                <ErrorMessage component={FormError} name="lastName" />
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
                <CustomTextField
                  fullWidth
                  label="Confirmar contraseña"
                  name="repeatPassword"
                  style={{width: 360}}
                  type="password"
                />
                <ErrorMessage component={FormError} name="repeatPassword" />
                <Button disabled={loading} type="submit" variant="contained">
                  Registrarse
                </Button>
              </Stack>
            </Form>
            <Grid container justifyContent="center">
              <Grid item>
                <Link to style={{textDecoration: 'none'}} variant="body2">
                  ¿Ya tienes una cuenta? Ingresa
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Formik>
  )
}

export default Register
