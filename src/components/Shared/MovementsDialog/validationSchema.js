import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  category: Yup.number().oneOf([]).required('Required'),
  concept: Yup.string().required('Required'),
  amount: Yup.number().positive().required('Required'),
})

export default validationSchema
