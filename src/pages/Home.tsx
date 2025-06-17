import Logo from '@/assets/logo.png'
import Spencer from '@/assets/spencer-sokol-sitting.png'
import Album from '@/assets/what-took-so-long.png'
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <>
            <article className='flex flex-col justify-center mx-2'>
                <img src={Logo} alt="" className='aspect-auto mb-8' />
                <Card className='bg-tertiary text-white border-10 border-white my-[80px] rounded-3xl drop-shadow-xl'>
                    <CardContent className='flex'>
                        <div>
                            <img src={Spencer} alt="I prefer to be entirely unserious." className='aspect-[0.624] max-w-24 md:max-w-48 lg:max-w-64 mt-[100px] drop-shadow-2xl duration-100 ease-in-out scale-[1.4] rotate-4' />
                        </div>
                        <div>
                            <p className='pr-8 pt-8 text-right font-semibold text-2xl/5'>
                                I can only guess why you're here. Maybe you'll like my <a href="https://music.spencersokol.com">music.</a> Maybe you want to <Link to={'/blog'}>read something.</Link>
                            </p>
                            <p className='pr-8 pt-8 text-right font-semibold text-base/3'>
                                Or maybe learn about my <Link to={'/portfolio'}>work</Link>.
                            </p>
                            <p className='mt-[100px] flex justify-center'>
                                <Link to={'/about/'} className="p-6 text-4xl/4 rounded-full flex-none font-(family-name:--font-savata) bg-white text-tertiary drop-shadow-lg animate-wiggle hover:scale-[1.2] duration-300 ease-in-out">?</Link>
                            </p>
                        </div>
                    </CardContent>
                </Card>
                <Card className='bg-tertiary text-white border-10 border-white my-[80px] rounded-3xl drop-shadow-xl'>
                    <CardContent className='m-8'>
                        <a href="https://music.spencersokol.com/" className='scale-[0.8] rotate-4 -mr-[100px] -mt-[150px] block' aria-roledescription='button'>
                            <img src={Album} alt="What Took So Long? EP cover art" className='drop-shadow-xl' />
                        </a>
                        <p className='font-semibold text-2xl/5'>
                            I released this back in 2020. And then the world fell apart again. I refuse to blamed for those events.
                        </p>
                    </CardContent>
                </Card>
            </article>
        </>
    )
}

export default Home;