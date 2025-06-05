import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Logo from '/logo.png'

const Home = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Home</h1>
            <img src={Logo} alt="" />
            <div className="card">
                <Button onClick={() => setCount((count) => count + 1)} className='bg-tertiary'>
                count is {count}
                </Button>
            </div>
        </>
    )
}

export default Home;