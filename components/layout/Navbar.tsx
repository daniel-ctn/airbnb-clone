import { FC } from 'react'
import Image from 'next/image'
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon } from '@heroicons/react/solid'

const Navbar: FC = () => {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image
          src='https://links.papareact.com/qd3'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
          alt='logo'
        />
      </div>
      <div className='flex items-center rounded-full border border-gray-400 py-1 shadow-sm justify-self-center'>
        <input
          type='text'
          placeholder='Search...'
          className='pl-4 bg-transparent outline-none flex-1 text-sm text-gray-600'
        />
        <SearchIcon className='w-5 h-5 text-red-600 cursor-pointer mx-3' />
      </div>
      <div className='flex space-x-4 items-center justify-end text-gray-500'>
        <p className='hidden md:inline'>Become a host</p>
        <GlobeAltIcon className='w-6 h-6'/>
        <div className='flex items-center rounded-2xl border-2 p-2'>
          <MenuIcon className='w-6 h-6 cursor-pointer'/>
          <UserCircleIcon className='w-6 h-6 cursor-pointer'/>
        </div>
      </div>
    </header>
  )
}

export default Navbar
