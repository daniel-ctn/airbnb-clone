import { FC } from 'react'
import Image from 'next/image'
import { ExploreData } from 'types'

interface ExploreCardProps {
  exploreData: ExploreData
}

const ExploreCard: FC<ExploreCardProps> = ({ exploreData }) => {
  return (
    <div className='flex space-x-6 items-center'>
      <Image
        src={exploreData.img}
        alt={exploreData.location}
        width={80}
        height={80}
        objectFit='contain'
        objectPosition='center'
        className='rounded-2xl'
      />
      <div className='flex flex-col'>
        <h5 className='font-semibold text-gray-700'>{exploreData.location}</h5>
        <h5 className='text-gray-500'>{exploreData.distance}</h5>
      </div>
    </div>
  )
}

export default ExploreCard
