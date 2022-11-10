import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'

import {getRequest, postRequest, putRequest} from '../services/httpRequest'
import notification from '../utils/notification'

const fetchCategory = () => getRequest('/categories/')
const createCategory = (category) => postRequest('/categories/', category)
const editCategory = (category) => putRequest(`/categories/${category.id}`, category)

// FETCH
const useGetCategory = (onSuccess, onError) =>
  useQuery(['category'], fetchCategory, {
    onSuccess,
    onError,
    select: (data) => data.body,
  })

// MUTATIONS
export const useCreateCategory = () => {
  const queryClient = useQueryClient()

  return useMutation(createCategory, {
    onSuccess: (res) => {
      queryClient.invalidateQueries('category')
      notification('success', res.message, 'light')
    },
    onError: (error) => {
      notification('error', `${error.response.data.message}`)
    },
  })
}

export const useEditCategory = () => {
  const queryClient = useQueryClient()

  return useMutation(editCategory, {
    onSuccess: (res) => {
      queryClient.invalidateQueries('category')
      notification('success', res.message, 'light')
    },
    onError: (error) => {
      notification('error', `${error.response.data.message}`)
    },
  })
}

export default useGetCategory
