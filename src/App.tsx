import { Outlet, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import posts from '@/content/posts.json'
import pages from '@/content/pages.json'
import { SimplePostsProvider } from '@idkwtm/simple-posts'

function App() {

    const { pathname } = useLocation();

    console.log(pathname);

    return (
        <SimplePostsProvider posts={posts} pages={pages}>
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
                    &copy; 2025 Spencer R. Soko<span className='rotate-y-180'>l</span>
                </section>
            </footer>
            <div className='bar h-screen w-2 absolute top-0 left-0 bg-secondary'></div>
            <div className='bar h-screen w-2 absolute top-0 right-4 bg-primary'></div>
            <div className='bar h-screen w-2 absolute top-0 right-2 bg-tertiary-foreground'></div>
            <div className='bar h-screen w-2 absolute top-0 right-0 bg-tertiary'></div>
        </SimplePostsProvider>
    )
}

export default App
