export const SvgSearch = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={20}
    fill='none'
    strokeWidth={3}
    stroke='currentColor'
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='m17 17 4 4M3 11a8 8 0 1 0 16 0 8 8 0 0 0-16 0z'
    />
  </svg>
)

export const SvgLoading = (props) => (
  <svg
  xmlns='http://www.w3.org/2000/svg'
  xmlSpace='preserve'
  width={64}
  height={64}
  viewBox='0 0 128 128'
  {...props}
>
  <g>
    <linearGradient id='a'>
      <stop offset='0%' stopColor='#F6F6F7' />
      <stop offset='100%' stopColor='#242424'/>
    </linearGradient>
    <path
      fill='url(#a)'
      fillRule='evenodd'
      d='M63.85 0A63.85 63.85 0 1 1 0 63.85 63.85 63.85 0 0 1 63.85 0zm.65 19.5a44 44 0 1 1-44 44 44 44 0 0 1 44-44z'
    />
    <animateTransform
      attributeName='transform'
      dur='1080ms'
      from='0 64 64'
      repeatCount='indefinite'
      to='360 64 64'
      type='rotate'
    />
  </g>
</svg>
)
