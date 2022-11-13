import RegisterForm from '../components/Register/Register'
import imgLogin from '../assets/register_image.jpg'

import styles from './styles.module.css'

const Register = () => (
  <div className={styles.container}>
    <div className={styles.boxImg}>
      <img alt="login-img" src={imgLogin} />
    </div>
    <RegisterForm />
  </div>
)

export default Register
