import {Button, Stack, Grid, Box, Typography, Container} from '@mui/material'
import {Formik, Form, ErrorMessage} from 'formik'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import * as Yup from 'yup'

import {useCreateUser} from '../../hooks/useUsers'
import CustomTextField from '../Forms/CustomTextField'
import FormError from '../Forms/FormError'

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(3, 'El nombre debe tener al menos 3 caracters')
    .required('Este campo es requerido'),
  lastName: Yup.string()
    .min(3, 'El apellido debe tener al menos 3 caracters')
    .required('Este campo es requerido'),
  email: Yup.string().email('No es un email válido').required('Campo requerido'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Required')
    .matches(
      /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{8,50}/,
      'La contraseñade tener un mínimo 8 caracteres, e incluir al menos una letra en mayúscula y un caracter especial'
    ),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden')
    .required('Required'),
})

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
          <Typography color="primary" component="h1" variant="h2">
            Alkybank
          </Typography>
          <Typography component="h1" variant="h6">
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
                <Link style={{textDecoration: 'none'}} to="/login" variant="body2">
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
