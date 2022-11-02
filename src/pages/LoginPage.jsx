import Login from '../components/Login/Login'
import imgLogin from '../assets/login_image.jpg'

import styles from './styles.module.css'

const LoginPage = () => (
  <div className={styles.container}>
    <Login />
    <div className={styles.boxImg}>
      <img alt="login-img" src={imgLogin} />
    </div>
  </div>
)

export default LoginPage
