import { useEffect, useState } from 'react'
import { SyncLoader } from 'react-spinners'
import { AppRoutes } from './router'
import './styles/global.css'

function App() {

  const [isLoading, setIsLoading] = useState(false)

  const handleLoading = () => {
    setIsLoading(false)
  }

  useEffect(() => {
    window.addEventListener('load', handleLoading)
    return () => window.removeEventListener('load', handleLoading)
  }, [])

  return (
    <div>
      {
        isLoading ?
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vh'
          }}>
            <SyncLoader color="#db1c0f" />
          </div>
          :
          <AppRoutes />
      }

    </div >
  )
}

export default App
