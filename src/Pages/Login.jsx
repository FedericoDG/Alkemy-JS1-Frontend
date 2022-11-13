import LoginForm from '../components/Login/Login'
import imgLogin from '../assets/login_image.jpg'

import styles from './style.module.css'

const Login = () => (
  <div className={styles.container}>
    <LoginForm />
    <div className={styles.boxImg}>
      <img alt="login-img" src={imgLogin} />
    </div>
  </div>
)

export default Login
