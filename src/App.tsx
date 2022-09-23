import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { AsideContent } from './components/AsideContent'
import { AsideUser } from './components/AsideUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App flex columns-2 gap-10 bg-body-bg-color h-full w-full m-0">
      <div className='col-span-3'>
        <AsideUser/>
      </div>
      <div className='col-span-7'>
        <AsideContent/>
      </div>
    </div>
  )
}

export default App
