import { FC } from 'react'
import Image from 'next/image'
import { ExploreData } from 'types'

interface ExploreCardProps {
  exploreData: ExploreData
}

const ExploreCard: FC<ExploreCardProps> = ({ exploreData }) => {
  return (
    <div
      className='flex space-x-6 items-center hover:bg-gray-100 hover:scale-105 
                 transition-all duration-200 cursor-pointer'
    >
      <div className='relative h-16 w-16'>
        <Image
          src={exploreData.img}
          alt={exploreData.location}
          layout='fill'
          className='rounded-2xl'
        />
      </div>
      <div className='flex flex-col'>
        <h5 className='font-semibold text-gray-700'>{exploreData.location}</h5>
        <h5 className='text-gray-500'>{exploreData.distance}</h5>
      </div>
    </div>
  )
}

export default ExploreCard
