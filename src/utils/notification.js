import {toast} from 'react-toastify'

const notification = (status, message, theme = 'colored') => {
  toast[status](message, {
    position: 'top-right',
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme,
  })
}

export default notification
