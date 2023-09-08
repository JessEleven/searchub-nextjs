'use client'

import { SvgWarning } from '@/components/assets/SvgNavbar'
import UserSearchForm from '@/components/UserSearchForm'
import { lazy, Suspense, useEffect, useState } from 'react'
const UserInfoCard = lazy(() => import('@/components/UserInfoCard'))

const HomePage = () => {
  const [user, setUser] = useState(String)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState(false)

  const getUser = async (userFound) => {
    const response = await fetch(`https://api.github.com/users/${userFound}`)

    if (!response.ok) {
      setError(true)
      setMessage('Usuario no encontrado')
      return
    }
    setUser(await response.json())
    setError(false)
  }

  useEffect(() => {
    setTimeout(() => {
      setError(false)
    }, 2000)
  }, [error])

  return (
    <>
     <UserSearchForm getUser={getUser} />

      { !user && !error && (
        <div className='animate-pulse mt-[272px] text-3xl font-bold'>
          <div className='flex opacity-50 items-center justify-center'>
            <p className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-pink-500'>Searc<span className='text-emerald-500'>Hub</span></p>
          </div>
        </div>
      )}

      { error && (
          <div className='flex items-center mt-4 px-4 py-2.5 gap-x-1.5 rounded-lg dark:bg-[#303030] bg-[#F6F6F7] transition duration-500 ease-in'>
            <SvgWarning className='w-5 h-5 text-red-400'/>
            <p className='text-sm dark:text-neutral-200 text-neutral-800 2xl:text-base font-medium'>{message}</p>
          </div>
      )}

      <Suspense>
        { user && (<UserInfoCard className='bg-opacity-10' user={user}/>)}
      </Suspense>
    </>
  )
}
export default HomePage
