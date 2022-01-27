import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from 'components/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next JS App with Tailwind</title>
        <meta
          name='description'
          content='Next JS project with tailwind template'
        />
      </Head>

      <body>
        <main className='h-screen'>
          <Navbar />
          <div className='flex bg-gray-700 w-full h-52 justify-center items-center space-x-6'>
            <h1 className='text-4xl font-bold text-blue-200'>Daniel</h1>
            <button className='px-4 py-2 text-2xl text-cyan-200 font-bold bg-amber-800 hover:ring-4 rounded-2xl border-2'>
              Nice!
            </button>
          </div>
        </main>
      </body>
    </div>
  )
}

export default Home
