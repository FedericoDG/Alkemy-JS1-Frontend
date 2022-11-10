import {useMutation, useQueryClient} from '@tanstack/react-query'

import {postRequest} from '../services/httpRequest'
import notification from '../utils/notification'

const addTransaction = (body) => postRequest('/transactions/', body)

// MUTATIONS
const useCreateTransaction = () => {
  const queryClient = useQueryClient()

  return useMutation(addTransaction, {
    onSuccess: (res) => {
      queryClient.invalidateQueries('me')
      notification('success', res.message, 'light')
    },
    onError: (error) => {
      notification('error', `${error.response.data.message}`)
    },
  })
}

export default useCreateTransaction
