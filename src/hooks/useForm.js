import {useState} from 'react'

const useForm = (initState) => {
  const [formData, setFormData] = useState(initState)

  const onChange = (evt) => {
    const {name, value} = evt.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const resetForm = () => {
    setFormData({...initState})
  }

  return {...formData, formData, onChange, resetForm}
}

export default useForm
