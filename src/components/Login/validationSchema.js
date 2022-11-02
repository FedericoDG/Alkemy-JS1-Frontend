import * as Yup from 'yup'

const validationSchema = Yup.object({
  email: Yup.string().email('Format not valid').required('Required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
})

export default validationSchema
