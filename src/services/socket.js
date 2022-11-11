import {io} from 'socket.io-client'

const socketIO = () => io(import.meta.env.VITE_SOCKET_URL)

export default socketIO
