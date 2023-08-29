export default function AboutPage () {
  return (
    <div className='mt-8 p-5 rounded-lg dark:shadow-none shadow-md dark:bg-slate-500 dark:bg-opacity-20 bg-neutral-500 bg-opacity-10 block'>
      <p className='text-lg text-center font-semibold text-cyan-400'>
        Acerca del sitio (*_*)
      </p>
      <p className='text-sm font-medium 2xl:text-base text-justify mt-2 dark:text-neutral-200 text-neutral-800'>
        Esta aplicación fue desarrollada en el Framework de {' '}
        <a className='underline underline-offset-4 decoration-cyan-400 text-cyan-400 font-semibold'
          data-type='nextjs'
          rel='noopener noreferrer'
          href='https://nextjs.org/'
          target='_blank'>
          Next.js 13
        </a>
        {' '} usando el App Router y
        deplegada en el sitio de {' '}
        <a className='underline underline-offset-4 decoration-cyan-400 text-cyan-400 font-semibold'
          data-type='vercel'
          rel='noopener noreferrer'
          href='https://vercel.com'
          target='_blank'>
          Vercel
        </a>
      </p>
    </div>
  )
}
