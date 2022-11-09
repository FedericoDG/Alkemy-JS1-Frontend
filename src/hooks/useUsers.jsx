import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import {useNavigate} from 'react-router-dom'

import {deleteRequest, getRequest, patchRequest, postRequest} from '../services/httpRequest'
import notification from '../utils/notification'

const fetchUsers = () => getRequest('/users/')
const fetchMe = () => getRequest('/auth/me')
const fetchUserDetails = (id) => getRequest(`/users/${id}`)
const createUser = (user) => postRequest('/users/', user)
const blockUser = (id) => patchRequest(`/users/block/${id}`)
const unblockUser = (id) => patchRequest(`/users/unblock/${id}`)
const resetUserPassword = (user) => patchRequest(`/users/resetpassword/${user.id}`, user.password)
const deleteUser = (id) => deleteRequest(`/users/${id}`)

// FETCH
const userGetUsers = (onSuccess, onError) =>
  useQuery(['users'], fetchUsers, {
    onSuccess,
    onError,
    select: (data) => data.body,
  })

export const useGetMe = (onSuccess, onError) =>
  useQuery(['me'], fetchMe, {
    onSuccess,
    onError,
    select: (data) => data.body,
  })

export const useGetUserDetails = (id, onSuccess, onError) =>
  useQuery(['userDetails', id], () => fetchUserDetails(id), {
    enabled: !!id,
    onSuccess,
    onError,
    select: (data) => data.body,
  })

export const useCreateUser = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  return useMutation(createUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('users')
      notification('success', 'Usuario creado', 'light')
      navigate('/login')
    },
    onError: (error) => {
      notification('error', `${error.response.data.message}`)
    },
  })
}

export const useBlockUser = () => {
  const queryClient = useQueryClient()

  return useMutation(blockUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('users')
      notification('success', 'Usuario bloqueado', 'light')
    },
  })
}

export const useUnblockUser = () => {
  const queryClient = useQueryClient()

  return useMutation(unblockUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('users')
      notification('success', 'Usuario desbloqueado', 'light')
    },
  })
}

export const useResetUserPassword = () => {
  const queryClient = useQueryClient()

  return useMutation(resetUserPassword, {
    onSuccess: () => {
      queryClient.invalidateQueries('users')
      notification('success', 'Contraseña reseteada', 'light')
    },
  })
}

export const useDeleteUser = () => {
  const queryClient = useQueryClient()

  return useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('users')
      notification('success', 'Usuario eliminado', 'light')
    },
  })
}

export default userGetUsers
