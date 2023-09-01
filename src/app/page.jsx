'use client'

import { SvgWarning } from '@/components/assets/SvgNavbar'
import UserSearchForm from '@/components/UserSearchForm'
import { lazy, Suspense, useState } from 'react'
const UserInfoCard = lazy(() => import('@/components/UserInfoCard'))

const HomePage = () => {
  const [user, setUser] = useState(String)
  const [error, setError] = useState(null)

  const getUser = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`)

    if (!response.ok) {
      // setUser(null)
      setError('Usuario no encontrado')
      return
    }

    setUser(await response.json())
    setError(null)
  }

  return (
    <>
     <UserSearchForm getUser={getUser} />

      { !user && !error && (
        <div className='animate-pulse mt-56'>
          <div className='flex opacity-50 items-center justify-center'>
            <p className='font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-yellow-400'>Searc<span className='text-emerald-500 text-2xl md:text-3xl font-bold'>Hub</span></p>
          </div>
        </div>
      )}

      { error && (
          <div className='flex items-center mt-4 px-4 py-2.5 gap-x-2.5 rounded-md dark:bg-opacity-20 dark:bg-slate-500 bg-neutral-500 bg-opacity-10'>
            <SvgWarning className='w-5 h-5 text-red-500'/>
            <p className='text-sm 2xl:text-base font-medium'>{error}</p>
          </div>
      )}

      <Suspense>
        {user && (<UserInfoCard user={user}/>)}
      </Suspense>
    </>
  )
}
export default HomePage
