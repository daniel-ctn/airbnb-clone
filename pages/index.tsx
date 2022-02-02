import type { NextPage } from 'next'
import Head from 'next/head'
import axios from 'axios'

import { ExploreData, SlideCardData } from 'types'
import Navbar from 'components/layout/Navbar'
import Banner from 'components/section/Banner'
import ExploreCard from 'components/ui/ExploreCard'
import SlideCard from 'components/ui/SlideCard'
import BottomCard from 'components/ui/BottomCard'

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
          <h2 className='font-semibold text-3xl text-gray-700 my-6'>
            Explore Nearby
          </h2>
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {exploreData?.map(data => (
              <ExploreCard key={data.img} exploreData={data} />
            ))}
          </div>
        </section>
        {/*slide section*/}
        <section className='container mx-auto mt-10 px-8 sm:px-16'>
          <h2 className='font-semibold text-3xl text-gray-700 my-6'>
            Live Anywhere
          </h2>
          <div className='w-full flex space-x-6 pb-4 overflow-scroll scrollbar-hide'>
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
        <p>bottom</p>
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
