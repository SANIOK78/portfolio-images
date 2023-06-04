import Head from 'next/head'
import Hero from '../components/Hero'
import Slider from '../components/Slider'
import { SliderData } from '../components/DataSlider'
import Instagram from '../components/Instagram'


export default function Home() {

  return (
    <div >
      <Head>
        <title>Portfolio Images</title>
        <meta name="description" 
          content="Portfolio des images, créé avec NextJs." 
        />
        <link rel="icon" href="/favicon.ico" />      
      </Head>

      <div className='mb-6 '>

        {/* Composant "Hero"  */}
        <Hero heading="Capture d'Image" 
          message="Je capture des moments dans la nature
            et les garde en vie"
        />

        {/* Composant "Carousel Images" */}
        <Slider slides={SliderData} />

        {/* Composant "Instagram" */}
        <Instagram />

      </div> 
    </div>
  )
}
