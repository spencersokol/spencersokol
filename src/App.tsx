import { Outlet } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'

function App() {
  return (
    <>
      <div className='bar h-screen w-2 absolute top-0 left-0 bg-secondary'></div>
      <div className='bar h-screen w-2 absolute top-0 right-4 bg-primary'></div>
      <div className='bar h-screen w-2 absolute top-0 right-2 bg-tertiary-foreground'></div>
      <div className='bar h-screen w-2 absolute top-0 right-0 bg-tertiary'></div>
      <Navigation />
      <Outlet />
    </>
  )
}

export default App
