import { SvgSearch, SvgLoading } from '@/components/assets/SvgSearch'
import { useState } from 'react'

const UserSearchForm = ({ getUser }) => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const username = e.currentTarget.username.value
    setLoading(true)

    if (!username) {
      return
    }

    await getUser(username)
    setLoading(false)
    e.target.reset()
    // setTimeout(() => {
    //   setLoading(false)
    // }, 4000)
    // console.log(username)
  }

  return (
    <form onSubmit={handleSubmit} className='mt-8'>

      <div className='flex items-cente'>
        <div className='relative w-full border-2 rounded-bl-lg rounded-tl-lg border-indigo-800'>
          <div className='flex py-2.5 absolute pl-4'>
            <SvgSearch className='stroke-black dark:stroke-slate-300'/>
          </div>
          <input
              className='bg-transparent flex items-center text-sm font-medium w-full pr-4 pl-12 py-2.5 out-input rounded-tl-lg rounded-bl-lg text-black dark:text-slate-100 dark:placeholder:text-slate-300 placeholder:text-black '
              name='username'
              type='search'
              placeholder='Usuario GitHub'
              autoFocus/>
        </div>

        <button disabled={loading} className='py-2.5 w-32 disabled:cursor-progress flex items-center justify-center text-sm transition-colors duration-1000 hover:bg-indigo-900 bg-indigo-800 font-medium rounded-tr-lg rounded-br-lg text-slate-100'>
          { loading
            ? <span className='flex items-center gap-x-2 justify-center'>
            <SvgLoading className='w-5 h-5' />Espere</span>
            : 'Buscar'
          }
        </button>
      </div>
    </form>
  )
}
export default UserSearchForm
