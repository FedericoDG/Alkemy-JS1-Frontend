import {Button, Box, Stack} from '@mui/material'
import {ErrorMessage, Form, Formik} from 'formik'
import {useDispatch, useSelector} from 'react-redux'

import {updateProfile} from '../../../app/authSlice'
import {toggleProfileDrawer} from '../../../app/uiSlice'
import {useUpdateUser} from '../../../hooks/useUsers'
import CustomTextField from '../../Forms/CustomTextField'
import FormError from '../../Forms/FormError'

import validationSchema from './validationSchema'

const UserForm = () => {
  const {user} = useSelector((state) => state.auth)

  const {mutate: updateUser} = useUpdateUser()

  const dispatch = useDispatch()

  return (
    <Formik
      initialValues={{
        firstName: user.firstName,
        lastName: user.lastName,
        address: user.address,
        password: '',
        repeatPassword: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        updateUser({...values, id: user.id})
        setTimeout(() => {
          dispatch(toggleProfileDrawer())
        }, 1000)
        dispatch(
          updateProfile({
            firstName: values.firstName,
            lastName: values.lastName,
            address: values.address,
            password: values.password,
          })
        )
      }}
    >
      <Box m={1} role="presentation" sx={{width: 360}}>
        <Form style={{width: '100%'}}>
          <Stack p={1} spacing={2}>
            <CustomTextField
              label="Nombre"
              name="firstName"
              size="small"
              style={{width: 345}}
              variant="standard"
            />
            <ErrorMessage component={FormError} name="firstName" />
            <CustomTextField
              fullWidth
              label="Apellido"
              name="lastName"
              size="small"
              style={{width: 345}}
              variant="standard"
            />
            <ErrorMessage component={FormError} name="lastName" />
            <CustomTextField
              fullWidth
              label="Dirección"
              name="address"
              size="small"
              style={{width: 345}}
              variant="standard"
            />
            <ErrorMessage component={FormError} name="address" />
            <CustomTextField
              fullWidth
              label="Contraseña"
              name="password"
              size="small"
              style={{width: 345}}
              type="password"
              variant="standard"
            />
            <ErrorMessage component={FormError} name="password" />
            <CustomTextField
              fullWidth
              label="Repetir contraseña"
              name="repeatPassword"
              size="small"
              style={{width: 345}}
              type="password"
              variant="standard"
            />
            <ErrorMessage component={FormError} name="repeatPassword" />
            <Button disabled={false} type="submit" variant="contained">
              Aceptar
            </Button>
          </Stack>
        </Form>
      </Box>
    </Formik>
  )
}

export default UserForm
