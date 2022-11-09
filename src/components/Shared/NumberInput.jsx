import {ErrorMessage, useField} from 'formik'
import {FormControl, InputLabel, OutlinedInput} from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'

import styles from './reusable.module.css'

const NumberInput = ({label, ...props}) => {
  const [field] = useField(props)

  return (
    <FormControl className={styles.container}>
      <InputLabel htmlFor="outlined-adornment-amount">Valor</InputLabel>
      <OutlinedInput
        // className={styles.input}
        id="outlined-adornment-amount"
        label={label}
        size="medium"
        startAdornment={<InputAdornment position="start">$</InputAdornment>}
        {...field}
        {...props}
      />
      <ErrorMessage className={styles.error} component="span" name={props.name} />
    </FormControl>
  )
}

export default NumberInput
