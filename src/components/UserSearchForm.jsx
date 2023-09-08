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
    const userFound = data.username
    if (!userFound) return

    await getUser(userFound)
    setLoading(false)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='mt-8'>

      <div className='flex items-center text-neutral-200 font-medium text-sm 2xl:text-base'>
        <div className='relative flex w-full bg-slate-900 bg-opacity-90 rounded-lg'>
          <div className='flex py-3 absolute pl-5'>
            <SvgSearch className='w-5 h-5 text-emerald-500'/>
          </div>
          <input
              {... register('username', { required: true })}
              className='out-input bg-transparent py-3 flex items-center w-full pr-5 pl-11 rounded-l-lg placeholder:text-neutral-200 caret-emerald-500'
              name='username'
              type='search'
              placeholder='Usuario GitHub 🚀'
              autoFocus/>
        <div className='border-2 border-emerald-500 rounded my-2'></div>

        <button type='submit' disabled={loading} className='py-3 2xl:min-w-[125px] min-w-[115px] disabled:cursor-progress flex items-center justify-center rounded-r-md'>

        { loading
          ? <span className='flex items-center gap-x-1.5 justify-center'>
              <SvgLoading />Buscando</span>
          : <span className=''>Buscar</span>
        }
        </button>
      </div>
      </div>

      {errors.username && (
        <p className='text-sm mt-1.5 -mb-2 font-medium text-red-400'>Nombre de usuario requerido</p>
      )}
    </form>
  )
}
export default UserSearchForm
