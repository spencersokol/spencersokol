import { Outlet, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation'
import { SimplePostsProvider } from '@idkwtm/simple-posts'
import { useEffect, useState } from 'react'
import { MySimplePost } from './utils/simple-post';

function App() {

    const [content, setContent] = useState<MySimplePost[]>([]);
    const { pathname } = useLocation();

    useEffect(() => {
        fetch('/content.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Response not OK.');
                }
                return response.json();
            })
            .then(data => {
                if (Array.isArray(data)) {
                    setContent(data);
                } else {
                    throw new Error('Bad data from fetch.');
                }
            })
            .catch((err) => {
                console.error('Unable to load content:', err);
            })
    }, []);

    return (
        <SimplePostsProvider content={content}>
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
