import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShortUrlConverter from './ShortUrlConvertor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <ShortUrlConverter/>
    </div>
    </>
  )
}

export default App
