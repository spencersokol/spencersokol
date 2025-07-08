import { Outlet, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import { SimplePostsProvider } from '@idkwtm/simple-posts'

function App() {

    const { pathname } = useLocation();

    return (
        <SimplePostsProvider>
            <header className='container mx-auto py-4 flex-none'>
                <section className='py-4 flex justify-end uppercase font-stretch-condensed font-thin'>
                    { ('/' !== pathname) && 
                        <Navigation />
                    }
                </section>
            </header>
            <main className='container max-w-xl mx-auto py-4 grow'>
                <Outlet />
            </main>
            <footer className='container mx-auto py-4 flex-none text-xs font-thin'>
                <section className='py-4 flex justify-center uppercase'>
                    &copy; { new Date().getFullYear() } Spencer R. Soko<span className='rotate-y-180'>l</span>
                </section>
            </footer>
        </SimplePostsProvider>
    )
}

export default App
