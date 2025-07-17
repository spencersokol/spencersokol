import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";

export default function Header() {

    const { pathname } = useLocation();

    return (
        <>
            <header className='container mx-auto py-4 flex-none'>
                <section className='py-4 flex justify-end uppercase font-stretch-condensed font-thin'>
                    { ('/' !== pathname) && 
                        <Navigation />
                    }
                </section>
            </header>
        </>
    );
}