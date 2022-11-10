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

import {useCreateCategory} from '../../hooks/useCategory'
import CustomTextField from '../Forms/CustomTextField'
import FormError from '../Forms/FormError'

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Este campo es requerido'),
  description: Yup.string(),
})

const CreateCategoryDialog = () => {
  const [openIncome, setOpenIncome] = useState(false)

  const {mutate: createCategory, isLoading} = useCreateCategory()

  const handleClickOpenIncome = () => {
    setOpenIncome(true)
  }

  const handleCloseIncome = () => {
    setOpenIncome(false)
  }

  return (
    <>
      <Button
        color="primary"
        size="small"
        startIcon={<CategoryIcon />}
        variant="contained"
        onClick={handleClickOpenIncome}
      >
        Crear Categoría
      </Button>
      <Dialog open={openIncome} onClose={handleCloseIncome}>
        <DialogContent>
          <Formik
            initialValues={{name: '', type: 'out', description: ''}}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              createCategory(values)
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
                <Avatar sx={{m: 1, bgcolor: 'primary.main'}}>
                  <CategoryIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Crear Categoría
                </Typography>
                <Box sx={{mt: 1}}>
                  <Form style={{width: '100%'}}>
                    <Stack p={1} spacing={1}>
                      <CustomTextField label="Nombre" name="name" style={{width: 250}} />
                      <ErrorMessage component={FormError} name="name" />
                      <CustomTextField
                        label="Descripción"
                        name="description"
                        style={{width: 250}}
                      />
                      <ErrorMessage component={FormError} name="description" />
                      <Button disabled={isLoading} type="submit" variant="contained">
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

export default CreateCategoryDialog
