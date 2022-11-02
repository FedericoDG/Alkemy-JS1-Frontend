import {ErrorMessage, useField} from 'formik'

const Input = ({label, ...props}) => {
  const [field] = useField(props)

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      <ErrorMessage component="span" name={props.name} />
    </>
  )
}

export default Input
