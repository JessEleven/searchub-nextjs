import { SvgSearch, SvgLoading } from '@/components/assets/SvgSearch'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const UserSearchForm = ({ getUser }) => {
  const {
    register, handleSubmit, reset,
    formState: { errors }
  } = useForm()
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data) => {
    setLoading(true)
    const name = data.username
    if (!name) return

    await getUser(name)
    setLoading(false)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='mt-8'>

      <div className='flex items-center'>
        <div className='relative w-full border-solid border-2 border-t-2 border-b-2 border-l-2 border-r-0 rounded-bl-lg rounded-tl-lg border-indigo-700'>
          <div className='flex py-2.5 absolute pl-4'>
            <SvgSearch className='w-5 h-5 text-neutral-800 dark:text-neutral-200'/>
          </div>
          <input
              {... register('username', { required: true })}
              className='bg-transparent flex items-center text-sm font-medium w-full pr-4 pl-11 py-2.5 out-input rounded-tl-lg rounded-bl-lg text-neutral-800 dark:text-neutral-200 dark:placeholder:text-neutral-200 placeholder:text-neutral-800 '
              name='username'
              type='search'
              placeholder='Usuario GitHub 🚀'
              autoFocus/>
        </div>

        <button type='submit' disabled={loading} className='py-2.5 disabled:cursor-progress flex items-center justify-center bg-[#303030] text-sm font-medium rounded-tr-lg rounded-br-lg text-neutral-200 border-indigo-700 border-2 border-solid'>

        { loading
          ? <span className='flex items-center gap-x-1.5 justify-center px-2.5'>
              <SvgLoading />Buscando</span>
          : <span className='px-[34px]'>Buscar</span>
        }
        </button>
      </div>

      {errors.username && (
        <p className='text-sm mt-1 text-red-500 2xl:text-base'>Nombre de usuario requerido</p>
      )}
    </form>
  )
}
export default UserSearchForm
