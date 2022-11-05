import {Provider} from 'react-redux'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {ToastContainer} from 'react-toastify'

import AppRouter from './router/AppRouter'
import store from './app/store'

import 'react-toastify/dist/ReactToastify.css'

const client = new QueryClient()

const App = () => (
  <Provider store={store}>
    <QueryClientProvider client={client}>
      <AppRouter />
      <ToastContainer autoClose={2500} />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  </Provider>
)

export default App
