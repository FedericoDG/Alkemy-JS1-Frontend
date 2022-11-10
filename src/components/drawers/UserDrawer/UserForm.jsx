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
        password: '',
        repeatPassword: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        updateUser({...values, id: user.id})
        setTimeout(() => {
          dispatch(toggleProfileDrawer())
        }, 1000)
        dispatch(updateProfile({firstName: values.firstName, lastName: values.lastName}))
      }}
    >
      <Box m={2} role="presentation" sx={{width: 360}}>
        <Form style={{width: '100%'}}>
          <Stack p={1} spacing={1}>
            <CustomTextField label="Nombre" name="firstName" style={{width: 345}} />
            <ErrorMessage component={FormError} name="firstName" />
            <CustomTextField fullWidth label="Apellido" name="lastName" style={{width: 345}} />
            <ErrorMessage component={FormError} name="lastName" />
            <CustomTextField
              fullWidth
              label="Contraseña"
              name="password"
              style={{width: 345}}
              type="password"
            />
            <ErrorMessage component={FormError} name="password" />
            <CustomTextField
              fullWidth
              label="Repetir contraseña"
              name="repeatPassword"
              style={{width: 345}}
              type="password"
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
