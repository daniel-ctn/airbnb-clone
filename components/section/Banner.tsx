import { FC } from 'react'
import Image from 'next/image'

const Banner: FC = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
      <Image
        src='https://links.papareact.com/0fm'
        priority
        layout='fill'
        objectFit='cover'
        alt='banner image'
      />
      <div className='absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center space-y-4'>
        <p className='text-sm text-gray-600 md:text-lg'>
          Not sure where to go? Perfect.
        </p>
        <button
          className='cursor-pointer rounded-2xl border-2 bg-white py-3 px-6 
            text-sm font-bold text-indigo-500 transition-all hover:shadow-md
            active:scale-90 md:text-lg'
        >
          I&apos;m flexible
        </button>
      </div>
    </div>
  )
}

export default Banner
