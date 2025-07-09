import Logo from '@/assets/logo.png'
import Spencer from '@/assets/spencer-sokol-sitting.png'
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <>
            <article className='flex flex-col justify-center mx-2'>
                <img src={Logo} alt="" className='aspect-auto mb-8' />
                <Card>
                    <CardContent className='flex'>
                        <div>
                            <img src={Spencer} alt="I prefer to be entirely unserious." className='aspect-[0.624] max-w-32 sm:max-w-64 -mt-[20px] drop-shadow-2xl duration-100 ease-in-out scale-[1.4] rotate-5' />
                        </div>
                        <div>
                            <p className='pr-8 pt-4 md:pt-6 lg:pt-8 text-right font-semibold text-2xl/5 font-roboto'>
                                I can only guess why you're here. Maybe you'll like my <Link to={'/music'}>music.</Link> Maybe you want to <Link to={'/blog'}>read something.</Link>
                            </p>
                            <p className='pr-8 pt-3 md:pt-4 lg:pt-8 text-right text-xs/3 font-roboto'>
                                Or maybe learn about my <Link to={'/portfolio'}>work</Link>.
                            </p>
                            <p className='mt-[20px] sm:mt-[100px] flex justify-center'>
                                <Link to={'/about/'} className="p-6 text-4xl/4 rounded-full flex-none font-(family-name:--font-savate) bg-white text-tertiary drop-shadow-lg animate-wiggle-lg hover:scale-[1.2] duration-300 ease-in-out">?</Link>
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </article>
        </>
    )
}

export default Home;