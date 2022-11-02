import * as Yup from 'yup'

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .max(15, 'Name must have a maximum of 15 characters')
    .required('Required'),
  email: Yup.string().email('Format not valid').required('Required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords are different')
    .required('Required'),
})

export default validationSchema
