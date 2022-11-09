import {useQuery} from '@tanstack/react-query'

import {getRequest} from '../services/httpRequest'

const fetchUser = () => getRequest('/users/')

// FETCH
const useGetUser = (onSuccess, onError) =>
  useQuery(['user'], fetchUser, {
    onSuccess,
    onError,
    select: (data) => data.body,
  })

export default useGetUser
