import {useField} from 'formik'
import TextField from '@mui/material/TextField'

const CustomTextField = ({name, ...otherProps}) => {
  const [field, meta] = useField(name)

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
  }

  if (meta && meta.touched && meta.error) {
    configTextfield.error = true
    configTextfield.helperText = meta.error
  }

  return <TextField {...configTextfield} />
}

export default CustomTextField
