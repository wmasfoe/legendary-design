import React, { useState, useEffect } from 'react'
// import { Button } from '../components'
import '../dist/es/assets/style.05ea6895.css'
import Button from './../dist/es/s/Button/Button'
function App() {
  const [type, setType] = useState('primary')

  return <div>
    <Button onClick={() => {console.log('123')}}>
      hello world
    </Button>
  </div>
}

export default App
