import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import {useNavigate} from 'react-router-dom'

import {
  deleteRequest,
  getRequest,
  patchRequest,
  postRequest,
  putRequest,
} from '../services/httpRequest'
import notification from '../utils/notification'

const fetchUsers = () => getRequest('/users/')
const fetchMe = () => getRequest('/auth/me/')
const fetchUserDetails = (id) => getRequest(`/users/${id}`)
const createUser = (user) => postRequest('/users/', user)
const blockUser = (id) => patchRequest(`/users/block/${id}`)
const unblockUser = (id) => patchRequest(`/users/unblock/${id}`)
const resetUserPassword = (user) => patchRequest(`/users/resetpassword/${user.id}`, user.password)
const updateUser = (user) => putRequest(`/users/${user.id}`, user)

const deleteUser = (id) => deleteRequest(`/users/${id}`)

// FETCH
const userGetUsers = (onSuccess, onError) =>
  useQuery(['users'], fetchUsers, {
    onSuccess,
    onError,
    select: (data) =>
      data.body.map((user) => ({...user, name: `${user.lastName} ${user.firstName}`})),
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

// MUTATIONS

export const useCreateUser = () => {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  return useMutation(createUser, {
    onSuccess: (res) => {
      queryClient.invalidateQueries('users')
      notification('success', res.message, 'light')
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
    onSuccess: (res) => {
      queryClient.invalidateQueries('users')
      notification('success', res.message, 'light')
    },
  })
}

export const useUnblockUser = () => {
  const queryClient = useQueryClient()

  return useMutation(unblockUser, {
    onSuccess: (res) => {
      queryClient.invalidateQueries('users')
      notification('success', res.message, 'light')
    },
  })
}

export const useResetUserPassword = () => {
  const queryClient = useQueryClient()

  return useMutation(resetUserPassword, {
    onSuccess: (res) => {
      queryClient.invalidateQueries('users')
      notification('success', res.message, 'light')
    },
  })
}

export const useUpdateUser = () => {
  const queryClient = useQueryClient()

  return useMutation(updateUser, {
    onSuccess: (res) => {
      queryClient.invalidateQueries('me')
      notification('success', res.message, 'light')
    },
    onError: (error) => {
      notification('error', `${error.response.data.message}`)
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
