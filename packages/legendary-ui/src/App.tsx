import { useState, useEffect } from 'react'
// import { Button } from '../components'
import '../dist/style.css'
// @ts-ignore
import { Button } from './../dist/componentsName.es'
function App() {
  const [type, setType] = useState('primary')

  return <div>
    <Button onClick={() => {console.log('123')}}>
      hello world
    </Button>
  </div>
}

export default App
