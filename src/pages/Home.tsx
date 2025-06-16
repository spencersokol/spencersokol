import Logo from '@/assets/logo.png'
import Spencer from '@/assets/spencer-sokol-sitting.png'
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <>
            <article className='flex flex-col justify-center'>
                <img src={Logo} alt="" className='aspect-auto mb-8' />
                <Card className='bg-tertiary text-white border-10 border-white my-8 rounded-3xl'>
                    <CardContent className='flex'>
                        <img src={Spencer} alt="" className='aspect-auto w-24 md:w-48 lg:w-64' />
                        <p className='p-8 text-right font-semibold text-xl/4'>
                            I can only guess why you're here. Maybe you'll like my <a href="https://music.spencersokol.com">music.</a> Maybe you want to <Link to={'/blog'}>read something.</Link> Or maybe you need to learn about my <Link to={'/portfolio'}>career</Link>.
                        </p>
                    </CardContent>
                </Card>
            </article>
        </>
    )
}

export default Home;