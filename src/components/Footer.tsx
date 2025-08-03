export default function Footer() {
    
    return (
        <>
            <footer className='container mx-auto py-4 flex-none text-xs font-thin'>
                <section className='py-4 flex justify-center font-(family-name:--font-inconsolata)'>
                    <a href="/rss.xml">RSS</a> &nbsp; | &nbsp; <a href="/sitemap.xml">sitemap</a>
                </section>
                <section className='py-1 flex justify-center uppercase'>
                    &copy; { new Date().getFullYear() } Spencer R. Soko<span className='rotate-y-180'>l</span>
                </section>
            </footer>
        </>
    );
}