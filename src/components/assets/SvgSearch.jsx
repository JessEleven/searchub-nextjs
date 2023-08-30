export const SvgSearch = (props) => (
  <svg
    fill='none'
    strokeWidth={2.5}
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
    xmlSpace='preserve'
    width={20}
    height={20}
    viewBox='0 0 128 128'
    {...props}
  >
    <rect width='100%' height='100%' fill='none' />
    <g>
      <path
        fill='#facc15'
        d='M97.63 8.23a7.38 7.38 0 0 1 2.7 10.07L89.2 37.57a7.38 7.38 0 1 1-12.77-7.37l11.12-19.27a7.38 7.38 0 0 1 10.08-2.7z'
      />
      <path
        fill='#fefae7'
        d='M121.01 32.517a7.38 7.38 0 0 1-2.697 10.07L99.039 53.712a7.38 7.38 0 1 1-7.374-12.768l19.265-11.128a7.38 7.38 0 0 1 10.08 2.702zM129.113 65.24a7.38 7.38 0 0 1-7.37 7.373l-22.254-.004a7.38 7.38 0 1 1-.002-14.744l22.248-.005a7.38 7.38 0 0 1 7.378 7.38zM119.77 97.63a7.38 7.38 0 0 1-10.07 2.7L90.43 89.2a7.38 7.38 0 1 1 7.37-12.77l19.27 11.12a7.38 7.38 0 0 1 2.7 10.08z'
      />
      <path
        fill='#fef5d2'
        d='M95.483 121.01a7.38 7.38 0 0 1-10.07-2.697L74.288 99.039a7.38 7.38 0 1 1 12.768-7.374l11.128 19.265a7.38 7.38 0 0 1-2.702 10.08z'
      />
      <path
        fill='#fef1bd'
        d='M62.76 129.113a7.38 7.38 0 0 1-7.373-7.37l.004-22.254a7.38 7.38 0 1 1 14.744-.002l.005 22.248a7.38 7.38 0 0 1-7.38 7.378z'
      />
      <path
        fill='#fdeca7'
        d='M30.37 119.77a7.38 7.38 0 0 1-2.7-10.07L38.8 90.43a7.38 7.38 0 1 1 12.77 7.37l-11.12 19.27a7.38 7.38 0 0 1-10.08 2.7z'
      />
      <path
        fill='#fde793'
        d='M6.99 95.483a7.38 7.38 0 0 1 2.697-10.07l19.274-11.124a7.38 7.38 0 1 1 7.374 12.768L17.07 98.185a7.38 7.38 0 0 1-10.08-2.702z'
      />
      <path
        fill='#fce37e'
        d='M-1.113 62.76a7.38 7.38 0 0 1 7.37-7.373l22.254.004a7.38 7.38 0 1 1 .002 14.744l-22.248.005a7.38 7.38 0 0 1-7.378-7.38z'
      />
      <path
        fill='#fcde69'
        d='M8.23 30.37a7.38 7.38 0 0 1 10.07-2.7L37.57 38.8a7.38 7.38 0 1 1-7.37 12.77L10.93 40.45a7.38 7.38 0 0 1-2.7-10.08z'
      />
      <path
        fill='#fbda53'
        d='M32.517 6.99a7.38 7.38 0 0 1 10.07 2.697l11.124 19.274a7.38 7.38 0 1 1-12.768 7.374L29.815 17.07a7.38 7.38 0 0 1 2.702-10.08z'
      />
      <path
        fill='#fbd53f'
        d='M65.24-1.113a7.38 7.38 0 0 1 7.373 7.37l-.004 22.254a7.38 7.38 0 1 1-14.744.002L57.86 6.265a7.38 7.38 0 0 1 7.38-7.378z'
      />
      <animateTransform
        attributeName='transform'
        calcMode='discrete'
        dur='1080ms'
        repeatCount='indefinite'
        type='rotate'
        values='0 64 64;30 64 64;60 64 64;90 64 64;120 64 64;150 64 64;180 64 64;210 64 64;240 64 64;270 64 64;300 64 64;330 64 64'
      />
    </g>
  </svg>
)

// <svg
// xmlSpace='preserve'
// viewBox='0 0 128 128'
// {...props}
// >
//   <g>
//     <linearGradient id='a'>
//       <stop offset='0%' stopColor='#F6F6F7' />
//       <stop offset='100%' stopColor='#facc15'/>
//     </linearGradient>
//     <path
//       fill='url(#a)'
//       fillRule='evenodd'
//       d='M63.85 0A63.85 63.85 0 1 1 0 63.85 63.85 63.85 0 0 1 63.85 0zm.65 19.5a44 44 0 1 1-44 44 44 44 0 0 1 44-44z'
//     />
//     <animateTransform
//       attributeName='transform'
//       dur='1080ms'
//       from='0 64 64'
//       repeatCount='indefinite'
//       to='360 64 64'
//       type='rotate'
//     />
//   </g>
// </svg>
