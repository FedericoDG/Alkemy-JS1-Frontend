import {useMutation, useQueryClient} from '@tanstack/react-query'

import {postRequest} from '../services/httpRequest'
import notification from '../utils/notification'
import socketIO from '../services/socket'

const socket = socketIO()

const addTransaction = async (values) => {
  const response = await postRequest('/transactions/', values)

  socket.emit('join_channel', values.user)
  socket.emit('send_transaction', {
    message: 'Transferencia recibida',
    channel: values.user,
  })

  return response
}

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
