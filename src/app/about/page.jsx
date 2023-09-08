export default function AboutPage () {
  return (
    <div className='mt-8 p-5 block rounded-lg dark:bg-[#303030] bg-[#F6F6F7]'>
      <p className='text-lg text-center font-semibold dark:text-neutral-200 text-neutral-800'>
        Acerca del sitio (*_*)
      </p>
      <p className='mt-2 text-sm font-medium 2xl:text-base dark:text-neutral-200 text-neutral-800'>
        La aplicación fue desarrollada con el Framework de {''}
        <a className='paragraph-content'
          data-type='nextjs'
          rel='noopener noreferrer'
          href='https://nextjs.org/'
          target='_blank'>
          Next.js 13
        </a>
        {' '} usando el App Router y
        deplegada en el sitio de {''}
        <a className='paragraph-content'
          data-type='vercel'
          rel='noopener noreferrer'
          href='https://vercel.com'
          target='_blank'>
          Vercel
        </a>
        {''} 🚀🚀🚀
      </p>
    </div>
  )
}
