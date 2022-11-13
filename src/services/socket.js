import {io} from 'socket.io-client'

const socketIO = () => io(import.meta.env.VITE_API_URL)

export default socketIO
