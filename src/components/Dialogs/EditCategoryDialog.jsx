import {
  Avatar,
  Box,
  Button,
  Container,
  Stack,
  Dialog,
  DialogContent,
  Typography,
} from '@mui/material'
import {Form, Formik, ErrorMessage} from 'formik'
import {useState} from 'react'
import * as Yup from 'yup'
import CategoryIcon from '@mui/icons-material/Category'

import CustomSelect from '../Forms/CustomSelect'
import CustomTextField from '../Forms/CustomTextField'
import FormError from '../Forms/FormError'
import useGetCategory, {useEditCategory} from '../../hooks/useCategory'

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Este campo es requerido'),
  category: Yup.string().required('Este campo es requerido'),
  description: Yup.string(),
})

const EditCategoryDialog = () => {
  const [openIncome, setOpenIncome] = useState(false)

  const {data: categories} = useGetCategory()

  const {mutate: editCategory} = useEditCategory()

  const handleClickOpenIncome = () => {
    setOpenIncome(true)
  }

  const handleCloseIncome = () => {
    setOpenIncome(false)
  }

  return (
    <>
      <Button
        color="secondary"
        size="small"
        startIcon={<CategoryIcon />}
        variant="contained"
        onClick={handleClickOpenIncome}
      >
        Editar Categoría
      </Button>
      <Dialog open={openIncome} onClose={handleCloseIncome}>
        <DialogContent>
          <Formik
            initialValues={{name: '', category: '', description: '', type: 'out'}}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              editCategory({id: values.category, ...values})
              setTimeout(() => {
                setOpenIncome(false)
              }, 1000)
            }}
          >
            <Container
              maxWidth="sm"
              sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                  <CategoryIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Editar Categoría
                </Typography>
                <Box sx={{mt: 1}}>
                  <Form style={{width: '100%'}}>
                    <Stack p={1} spacing={1}>
                      <CustomSelect label="Categoría" name="category" options={categories} />
                      <CustomTextField label="Nuevo Nombre" name="name" style={{width: 250}} />
                      <ErrorMessage component={FormError} name="name" />
                      <CustomTextField
                        label="Descripción"
                        name="description"
                        style={{width: 250}}
                      />
                      <ErrorMessage component={FormError} name="description" />
                      <Button type="submit" variant="contained">
                        Aceptar
                      </Button>
                    </Stack>
                  </Form>
                </Box>
              </Box>
            </Container>
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default EditCategoryDialog
