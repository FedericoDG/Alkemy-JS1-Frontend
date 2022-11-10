import * as Yup from 'yup'

const validationSchemaLogin = Yup.object({
  email: Yup.string().email('No es un email válido').required('Campo requerido'),
  password: Yup.string().required('Campo requerido'),
})

export default validationSchemaLogin
