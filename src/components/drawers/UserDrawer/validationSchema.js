import * as Yup from 'yup'

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(3, 'El nombre debe tener al menos 3 caracters')
    .required('Este campo es requerido'),
  lastName: Yup.string()
    .min(3, 'El apellido debe tener al menos 3 caracters')
    .required('Este campo es requerido'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Este campo es requerido')
    .matches(
      /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{8,50}/,
      'La contraseñade tener un mínimo 8 caracteres, e incluir al menos una letra en mayúscula y un caracter especial'
    ),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden')
    .required('Este campo es requerido'),
})

export default validationSchema
