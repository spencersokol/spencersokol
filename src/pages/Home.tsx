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
                            <img src={Spencer} alt="I prefer to be entirely unserious." className='aspect-[0.624] max-w-48 sm:max-w-64 -mt-[10px] sm:-mt-[20px] drop-shadow-2xl duration-100 ease-in-out scale-[1.4] rotate-5' />
                        </div>
                        <div className='flex flex-col pr-2 sm:pr-8 py-4 md:py-6 lg:py-8 font-roboto text-right'>
                            <p className='font-semibold text-xl/5 sm:text-2xl/5'>
                                I can only guess why you're here. Maybe you'll like my <Link to={'/music'}>music.</Link> Maybe you want to <Link to={'/blog'}>read something.</Link>
                            </p>
                            <p className='grow'></p>
                            <p className='pb-3 text-xs/3'>
                                Or maybe learn about my <Link to={'/portfolio'}>work</Link>.
                            </p>
                        </div>
                    </CardContent>
                </Card>
                <p className='mt-[20px] sm:mt-[50px] mb-[50px] flex justify-center'>
                    <Link to={'/about/'} className="p-6 text-4xl/4 rounded-full flex-none font-(family-name:--font-savate) bg-white text-tertiary drop-shadow-lg animate-wiggle-lg hover:scale-[1.2] duration-300 ease-in-out">?</Link>
                </p>
            </article>
        </>
    )
}

export default Home;