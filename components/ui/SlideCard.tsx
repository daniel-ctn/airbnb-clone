import { FC } from 'react'
import Image from 'next/image'
import { SlideCardData } from 'types'

interface SlideCardProps {
  slideData: SlideCardData
}

const SlideCard: FC<SlideCardProps> = ({ slideData }) => {
  return (
    <div className='flex flex-col space-y-2'>
      <div className='relative h-80 w-80 cursor-pointer'>
        <Image
          src={slideData.img}
          alt={slideData.title}
          layout='fill'
          className='rounded-xl'
        />
      </div>
      <h3 className='font-semibold text-2xl text-gray-700'>
        {slideData.title}
      </h3>
    </div>
  )
}

export default SlideCard
