import type { NextPage } from 'next'
import Head from 'next/head'
import axios from 'axios'

import { ExploreData } from 'types'
import Navbar from 'components/layout/Navbar'
import Banner from 'components/section/Banner'
import ExploreCard from 'components/ui/ExploreCard'

interface HomeProps {
  exploreData: ExploreData[]
}

const Home: NextPage<HomeProps> = ({exploreData}) => {
  return (
    <>
      <Head>
        <title>Airbnb clone</title>
        <meta name='description' content='Airbnb clone' />
      </Head>

      <main className='h-screen'>
        <Navbar />
        <Banner />
        <section className='container mx-auto mt-3 px-8 sm:px-16'>
          <h2 className='font-semibold text-3xl text-gray-700 my-6'>Explore Nearby</h2>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {exploreData?.map(data => (
              <ExploreCard key={data.img} exploreData={data}/>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const { data: exploreData } = await axios('https://links.papareact.com/pyp')

  return {
    props: {
      exploreData
    }
  }
}

export default Home
