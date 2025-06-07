import { Outlet } from 'react-router-dom'
import Navigation from './components/Navigation'

function App() {
    return (
        <>
            <header className='container mx-auto py-4 flex-none'>
                <section className='py-4 flex justify-center'>
                    <Navigation />
                </section>
            </header>
            <main className='container mx-auto py-4 grow'>
                <Outlet />
            </main>
            <footer className='container mx-auto py-4 flex-none'>
                <section className='py-4 flex justify-center'>
                    &copy; 2025 Spencer R. Sokol
                </section>
            </footer>
            <div className='bar h-screen w-2 absolute top-0 left-0 bg-secondary'></div>
            <div className='bar h-screen w-2 absolute top-0 right-4 bg-primary'></div>
            <div className='bar h-screen w-2 absolute top-0 right-2 bg-tertiary-foreground'></div>
            <div className='bar h-screen w-2 absolute top-0 right-0 bg-tertiary'></div>
        </>
    )
}

export default App
