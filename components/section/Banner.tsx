import { FC } from 'react'
import Image from 'next/image'

const Banner: FC = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
      <Image
        src='https://links.papareact.com/0fm'
        layout='fill'
        objectFit='cover'
        alt='banner image'
      />
      <div className='flex flex-col items-center space-y-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <p className='text-sm md:text-lg text-gray-600'>
          Not sure where to go? Perfect.
        </p>
        <button
          className='cursor-pointer rounded-2xl bg-white py-3 px-6 border-2 
            text-sm md:text-lg text-indigo-500 font-bold transition-all
            hover:shadow-md active:scale-90'
        >
          I&apos;m flexible
        </button>
      </div>
    </div>
  )
}

export default Banner
