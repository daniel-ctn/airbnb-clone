import type { NextPage } from 'next'
import Head from 'next/head'
import axios from 'axios'

import { ExploreData, SlideCardData } from 'types'
import Navbar from 'components/layout/Navbar'
import Banner from 'components/section/Banner'
import ExploreCard from 'components/ui/ExploreCard'
import SlideCard from 'components/ui/SlideCard'
import BottomCard from 'components/section/BottomCard'
import Footer from 'components/section/Footer'

interface HomeProps {
  exploreData: ExploreData[]
  slideData: SlideCardData[]
}

const Home: NextPage<HomeProps> = ({ exploreData, slideData }) => {
  return (
    <>
      <Head>
        <title>Airbnb clone</title>
        <meta name='description' content='Airbnb clone' />
      </Head>

      <main className='h-screen'>
        <Navbar />
        <Banner />
        {/*explore section*/}
        <section className='container mx-auto mt-10 px-8 sm:px-16'>
          <h2 className='my-6 text-3xl font-semibold text-gray-700'>
            Explore Nearby
          </h2>
          <div className='grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map(data => (
              <ExploreCard key={data.img} exploreData={data} />
            ))}
          </div>
        </section>
        {/*slide section*/}
        <section className='container mx-auto mt-10 px-8 sm:px-16'>
          <h2 className='my-6 text-3xl font-semibold text-gray-700'>
            Live Anywhere
          </h2>
          <div className='flex w-full space-x-6 overflow-scroll pb-4 scrollbar-hide'>
            {slideData?.map(data => (
              <SlideCard key={data.img} slideData={data} />
            ))}
          </div>
        </section>
        <BottomCard
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoor'
          description='Wishlists curated by Airbnb'
        />
        <Footer />
      </main>
    </>
  )
}

export async function getStaticProps() {
  const { data: exploreData } = await axios('https://links.papareact.com/pyp')
  const { data: slideData } = await axios('https://links.papareact.com/zp1')

  return {
    props: {
      exploreData,
      slideData,
    },
  }
}

export default Home
