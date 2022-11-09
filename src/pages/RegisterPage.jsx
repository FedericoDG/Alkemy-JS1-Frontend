import Register from '../components/register/Register'
import imgLogin from '../assets/register_image.jpg'

import styles from './styles.module.css'

const RegisterPage = () => (
  <div className={styles.container}>
    <div className={styles.boxImg}>
      <img alt="login-img" src={imgLogin} />
    </div>
    <Register />
  </div>
)

export default RegisterPage
