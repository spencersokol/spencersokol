import { Outlet } from 'react-router-dom'
import { SimplePostsProvider } from '@idkwtm/simple-posts'
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import UpdateApp from './components/UpdateApp';

function App() {

    return (
        <SimplePostsProvider>
            <ScrollToTop />
            <UpdateApp />
            <Header />
            <main className='container max-w-xl mx-auto py-4 grow'>
                <Outlet />
            </main>
            <Footer />
        </SimplePostsProvider>
    )
}

export default App
