import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollToTop from '@/components/ScrollToTop';
import { Card, CardContent } from '@/components/ui/card';
import { SimplePostsProvider } from '@idkwtm/simple-posts';
import { useRouteError } from 'react-router-dom';

interface RouteError {
    statusText?: string;
    message?: string;
}

export default function ErrorPage() {
    const error = useRouteError() as RouteError;
    console.error(error);

    return (
        <SimplePostsProvider>
            <ScrollToTop />
            <Header />
            <main className='container max-w-xl mx-auto py-4 grow'>
                <Card title="Oops! All errors!">
                    <CardContent>
                        <p>Sorry, an unexpected error has occurred.</p>
                        <p>
                            <i>{error.statusText || error.message}</i>
                        </p>
                    </CardContent>
                </Card>
            </main>
            <Footer />
        </SimplePostsProvider>
    );
}
