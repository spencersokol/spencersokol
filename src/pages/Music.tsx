import { Card, CardContent } from "@/components/ui/card";
import Album from '@/assets/what-took-so-long.png'

const Music = () => {
    return (
        <>
            <Card title="I Make Music">
                <CardContent>
                    <p>
                        You can find my music on most major streaming platforms, like <a href="https://open.spotify.com/artist/6KvYA6lz6oQGw8Sg0A2Gdw?si=PeIdcPZsSWeBD7dEUP9PdA">Spotify</a>. And if you really like it, you can even purchase it from <a href="https://music.spencersokol.com">BandCamp</a>, if you're into that sort of thing.
                    </p>
                    <p>
                        I hope you're into that sort of thing.
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardContent className='m-8'>
                    <a href="https://music.spencersokol.com/" className='scale-[0.8] rotate-4 -mr-[100px] -mt-[120px] md:-mt-[150px] block' aria-roledescription='button'>
                        <img src={Album} alt="What Took So Long? EP cover art" className='drop-shadow-xl' />
                    </a>
                    <p className='font-semibold text-2xl/5'>
                        I released this back in January of 2020. And then the world fell apart again. I refuse to be blamed for those events.
                    </p>
                </CardContent>
            </Card>
        </>
    )
}

export default Music;