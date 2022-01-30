import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from 'components/layout/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Airbnb clone</title>
        <meta
          name='description'
          content='Airbnb clone'
        />
      </Head>

      <main className='h-screen'>
        <Navbar />
      </main>
    </>
  )
}

export default Home
