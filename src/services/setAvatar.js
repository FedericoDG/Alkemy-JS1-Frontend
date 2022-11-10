import notification from '../utils/notification'

import {postRequest} from './httpRequest'

const setAvatarFunc = async (formData) => {
  try {
    const response = await postRequest('/users/profile-pic', formData)

    notification('success', response.message)

    return response.body.url
  } catch (error) {
    notification('error', `${error.response.data.message}`)

    throw new Error(error)
  }
}

export default setAvatarFunc
