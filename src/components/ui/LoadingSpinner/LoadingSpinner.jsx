import {useState} from 'react'
import './LoadingSpinner.css'

const LoadingSpinner = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleLoading = () => {
    setIsLoading(true)
    // Here goes loading trigger action
  }

  return (
    <div className="spinner-container">
      <div className="spinner" />
    </div>
  )
}

export default LoadingSpinner
