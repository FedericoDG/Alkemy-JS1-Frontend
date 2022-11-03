import localStorage from '../utils/localStorage'
import notification from '../utils/notification'

import {postRequest} from './httpRequest'

const login = async (email, password) => {
  try {
    const {body} = await postRequest('/auth/login', {email, password})

    localStorage.write('alkybank', body)

    notification('success', `Hola ${body.user.firstName} 😀`)

    return body
  } catch (error) {
    notification('error', `${error.response.data.message}`)

    throw new Error(error)
  }
}

const logout = () => localStorage.remove('alkybank')

const auth = {
  login,
  logout,
}

export default auth
