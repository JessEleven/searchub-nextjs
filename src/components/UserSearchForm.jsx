import { SvgSearch, SvgLoading } from '@/components/assets/SvgSearch'
import { useState } from 'react'
import { SvgWarning } from './assets/SvgNavbar'

const UserSearchForm = ({ getUser }) => {
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const username = e.currentTarget.username.value
    setLoading(true)

    if (username === '') {
      setErr('El campo esta vacio')
      return console.log('vacio')
    }

    await getUser(username)
    setErr(false)
    setLoading(false)
    e.target.reset()
    /* setTimeout(() => {
      setLoading(false)
    }, 2000) */
    // console.log(username)
  }

  return (
    <form onSubmit={handleSubmit} className='mt-8'>

      <div className='flex items-center'>
        <div className='relative w-full border-2 rounded-bl-lg rounded-tl-lg border-indigo-700'>
          <div className='flex py-2.5 absolute pl-4'>
            <SvgSearch className='w-5 h-5 text-neutral-800 dark:text-neutral-200'/>
          </div>
          <input
              className='bg-transparent flex items-center text-sm font-medium w-full pr-4 pl-11 py-2.5 out-input rounded-tl-lg rounded-bl-lg text-neutral-800 dark:text-neutral-200 dark:placeholder:text-neutral-200 placeholder:text-neutral-800 '
              name='username'
              type='search'
              placeholder='Usuario GitHub'
              autoFocus/>
        </div>

        <button className='py-2.5 flex items-center justify-center text-sm transition-all duration-300 hover:bg-indigo-900 bg-indigo-700 font-medium rounded-tr-lg rounded-br-lg text-neutral-200 border-indigo-700 border-2 border-solid'>
        {/* disabled={loading} disabled:cursor-progress  */}
        { loading
          ? <span className='flex items-center gap-x-1.5 justify-center px-2.5'>
              <SvgLoading />Buscando</span>
          : <span className='px-[34px]'>Buscar</span>
        }
        </button>
      </div>

      { err && (
          <div className='flex items-center mt-4 px-4 py-2.5 gap-x-2.5 rounded-md dark:bg-opacity-20 dark:bg-slate-500 bg-neutral-500 bg-opacity-10'>
            <SvgWarning className='w-5 h-5 text-red-400'/>
            <p className='text-sm 2xl:text-base font-medium'>{err}</p>
          </div>
      )}
    </form>
  )
}
export default UserSearchForm
