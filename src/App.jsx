import {Provider} from 'react-redux'
import {ToastContainer} from 'react-toastify'

import AppRouter from './router/AppRouter'
import store from './app/store'

import 'react-toastify/dist/ReactToastify.css'

const App = () => (
  <Provider store={store}>
    <AppRouter />
    <ToastContainer autoClose={2500} />
  </Provider>
)

export default App
