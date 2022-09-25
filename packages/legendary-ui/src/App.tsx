import { useState, useEffect } from 'react'
import { Button } from '../components'
import type { BaseButtonProps } from '../components'
type BtnType = BaseButtonProps['btnType']
const App = () => {
  const [type, setType] = useState<BtnType>('primary')

  useEffect(() => {
    setTimeout(() => {
      setType('danger')
    }, 1000)
  }, [])

  return <div>
    <Button btnType={type} onClick={() => {console.log('123')}}>
      hello world
    </Button>
  </div>
}

export default App
