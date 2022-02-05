import { FC } from 'react'
import Image from 'next/image'
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
} from '@heroicons/react/solid'

const Navbar: FC = () => {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white p-5 shadow-md md:px-10'>
      <div className='relative my-auto flex h-10 cursor-pointer items-center'>
        <Image
          src='https://links.papareact.com/qd3'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
          alt='logo'
        />
      </div>
      <div className='flex w-full items-center justify-self-center rounded-full border border-gray-400 py-1 shadow-sm'>
        <input
          type='text'
          placeholder='Search...'
          className='flex-1 bg-transparent pl-4 text-sm text-gray-600 outline-none'
        />
        <SearchIcon className='mx-3 h-5 w-5 cursor-pointer text-red-600' />
      </div>
      <div className='flex items-center justify-end space-x-4 text-gray-500'>
        <p className='hidden md:inline'>Become a host</p>
        <GlobeAltIcon className='h-6 w-6' />
        <div className='flex items-center space-x-0.5 rounded-2xl border-2 p-2'>
          <MenuIcon className='h-6 w-6 cursor-pointer' />
          <UserCircleIcon className='h-6 w-6 cursor-pointer' />
        </div>
      </div>
    </header>
  )
}

export default Navbar
