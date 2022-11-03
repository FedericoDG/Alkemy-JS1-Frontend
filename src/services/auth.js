import localStorage from '../utils/localStorage'

import {postRequest} from './httpRequest'

const login = async (email, password) => {
  try {
    const {body} = await postRequest('/auth/login', {email, password})

    localStorage.write('alkybank', body)

    return body
  } catch (error) {
    throw new Error(error)
  }
}

const logout = () => localStorage.remove('alkybank')

const auth = {
  login,
  logout,
}

export default auth
