import { FC } from 'react'
import Image from 'next/image'

interface BottomCardProps {
  img: string
  title: string
  description: string
}

const BottomCard: FC<BottomCardProps> = ({ img, title, description }) => {
  return (
    <section className='relative my-10 container mx-auto px-8 sm:px-16 h-[30rem]'>
      <div className=''>
        <Image
          src={img}
          alt={description}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          className='rounded-2xl'
        />
      </div>
      <div className='absolute top-[20%] left-[5%] flex flex-col items-start space-y-3 w-full lg:w-[30%] px-4'>
        <h1 className='font-bold text-4xl'>{title}</h1>
        <h4 className='font-semibold text-lg'>{description}</h4>
        <button className='bg-black text-white rounded-xl text-lg px-4 py-2'>Get Inspired</button>
      </div>
    </section>
  )
}

export default BottomCard
