import { useState } from 'react'
import { Button } from '@/components/ui/button'

const Home = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Home</h1>
            <div className="card">
                <Button onClick={() => setCount((count) => count + 1)}>
                count is {count}
                </Button>
            </div>
        </>
    )
}

export default Home;