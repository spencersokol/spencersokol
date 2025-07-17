import { Outlet } from 'react-router-dom'
import { SimplePostsProvider } from '@idkwtm/simple-posts'
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

    return (
        <SimplePostsProvider>
            <ScrollToTop />
            <Header />
            <main className='container max-w-xl mx-auto py-4 grow'>
                <Outlet />
            </main>
            <Footer />
        </SimplePostsProvider>
    )
}

export default App
