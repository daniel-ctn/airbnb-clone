import { FC } from 'react'
import Image from 'next/image'

interface BottomCardProps {
  img: string
  title: string
  description: string
}

const BottomCard: FC<BottomCardProps> = ({ img, title, description }) => {
  return (
    <section className='container relative my-10 mx-auto h-[30rem]'>
      <div className='relative mx-auto h-full w-[95%]'>
        <Image
          src={img}
          alt={description}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          className='rounded-2xl'
        />
      </div>
      <div className='absolute top-[20%] left-[6%] flex w-full flex-col items-start space-y-3 px-4 lg:w-[30%]'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <h4 className='text-lg font-semibold'>{description}</h4>
        <button className='rounded-xl bg-black px-4 py-2 text-lg text-white'>
          Get Inspired
        </button>
      </div>
    </section>
  )
}

export default BottomCard
