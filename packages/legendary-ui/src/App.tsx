import { useState, useEffect } from 'react'
import { Button } from '../components'
function App() {
  const [type, setType] = useState('primary')

  return <div>
    <Button onClick={() => {console.log('123')}}>
      hello world
    </Button>
  </div>
}

export default App
