import {useQuery} from '@tanstack/react-query'

import {getRequest} from '../services/httpRequest'

const fetchCategory = () => getRequest('/categories/')

// FETCH
const useGetCategory = (onSuccess, onError) =>
  useQuery(['category'], fetchCategory, {
    onSuccess,
    onError,
    select: (data) => data.body,
  })

export default useGetCategory
