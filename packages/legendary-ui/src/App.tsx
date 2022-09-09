import { useState, useEffect } from 'react'
import { Button } from '../components'
function App() {
  const [type, setType] = useState('primary')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setType('danger')
    }, 3000);

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return <div>
    <Button onClick={() => {console.log('123')}} btnType={type as 'primary' | 'danger'}>
      hello world
    </Button>
  </div>
}

export default App
