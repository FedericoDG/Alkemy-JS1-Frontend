import {useField, useFormikContext} from 'formik'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'

const CustomSelect = ({name, options, ...otherProps}) => {
  const {setFieldValue} = useFormikContext()
  const [field, meta] = useField(name)

  const handleChange = (evt) => {
    const {value} = evt.target

    setFieldValue(name, value)
  }

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    variant: 'outlined',
    fullWidth: true,
    onChange: handleChange,
  }

  if (meta && meta.touched && meta.error) {
    configSelect.error = true
    configSelect.helperText = meta.error
  }

  return (
    <TextField {...configSelect}>
      {options.map((item) => (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      ))}
    </TextField>
  )
}

export default CustomSelect
