import * as Yup from 'yup'

const validationSchemaLogin = Yup.object({
  email: Yup.string().email('Format not valid').required('Required'),
  password: Yup.string().required('Required'),
})

export default validationSchemaLogin
