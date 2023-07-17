import { SvgFollowers, SvgFollowings, SvgGitHub, SvgRepository } from '@/components/assets/SvgMain'
import { SvgPinAlt, SvgLink, SvgTwitter, SvgBuilding } from './assets/SvgSocialMedia'
import Image from 'next/image'

function valideURL (url) {
  // Verificar si la URL comienza con "http://" o "https://"
  if (!/^https?:\/\//i.test(url)) {
    // Agregar "https://" al principio de la URL
    url = 'https://' + url
  }
  return url
}

const UserInfoCard = ({ user }) => {
  return (
    <section className='mt-4 mb-8 bg-[#F6F6F7] shadow-md text-black dark:shadow-none dark:text-slate-100 rounded-lg dark:bg-[#303030]'>
      <div className='container px-3 lg:px-6 mx-auto flex flex-col'>
        <div className='flex flex-col sm:flex-row mt-4 lg:mt-6 mb-4 lg:mb-6'>
          <div className='sm:w-1/3 text-center mb-4 md:mb-0'>
            <div className='w-24 h-24 dark:border-0 border-2 border-indigo-800  overflow-hidden object-contain rounded-full inline-flex items-center justify-center bg-slate-300'>
              { user.avatar_url && (
                  <Image
                    src={user.avatar_url}
                    width={98}
                    height={98}
                    alt={`username ${user.login}`}
                    priority />
              )}
            </div>

            <div className='flex flex-col items-center text-center justify-center -mt-1.5'>
              <p className='text-sm md:text-base font-semibold mt-2 break-all px-2'>
                  <span>@</span>{user.login}
              </p>
              <div className='w-32 h-1 bg-indigo-800 rounded mt-2 mb-2'></div>
                <p className='text-sm 2xl:text-base font-medium'>
                  { new Date(user.created_at || '').toLocaleDateString('es',
                    {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })
                  }
                </p>
                <a data-type='github'
                  className='flex items-center mt-4 rounded-lg px-5 py-2 bg-gray-500 hover:bg-gray-600 dark:bg-[#242424] dark:hover:bg-[#444444] transition-colors duration-300 md:text-base'
                  href={user.html_url}
                  rel='noreferrer'
                  target='_blank'>
                  <SvgGitHub className='fill-[#f6f6f6] dark:fill-slate-300 flex items-center' />
                  <span className='ml-2 text-sm 2xl:text-base font-medium text-[#f6f6f6] dark:text-slate-300'>GitHub</span>
                </a>
              </div>
           </div>

          <div className='sm:w-2/3 h-full'>
            { user.bio &&
              <p className='text-center md:text-left text-base md:text-lg font-semibold mb-4'>
                {user.name}
              </p>
            }

            { user.bio &&
              <p className='h-full md:min-h-[96px] text-sm text-justify font-medium mb-4'>
                {user.bio}
              </p>
            }

            <div className='w-full dark:shadow-none dark:bg-[#242424] bg-[#ececec] shadow-md rounded-lg'>
              <div className='grid grid-cols-3 py-4 font-semibold'>
                <article className='text-center space-y-1'>
                  <div className='flex items-center justify-center'>
                    <SvgRepository className='stroke-indigo-800' />
                  </div>
                  <p className='text-sm 2xl:text-base'>
                    Repos
                  </p>
                  <p className='text-base'>
                    {user.public_repos}
                  </p>
                </article>

                <article className='text-center space-y-1'>
                  <div className='flex items-center justify-center'>
                    <SvgFollowers className='stroke-indigo-800' />
                  </div>
                  <p className='text-sm 2xl:text-base'>
                    Followers
                  </p>
                  <p className='text-base'>
                    {user.followers}
                  </p>
                </article>

                <article className='text-center space-y-1'>
                  <div className='flex items-center justify-center'>
                    <SvgFollowings className='stroke-indigo-800' />
                  </div>
                  <p className='text-sm 2xl:text-base'>
                    Following
                  </p>
                  <p className='text-base'>
                    {user.following}
                  </p>
                </article>
              </div>
            </div>

            <div className='flex flex-col'>
              <div className='mt-4 grid gap-y-3 md:gap-x-3 grid-cols-1 md:grid-cols-2 font-medium'>

                { user.location &&
                  <article className='flex items-center dark:shadow-none dark:bg-[#242424] bg-[#ececec] shadow-md rounded-lg px-3 py-2.5'>
                    <SvgPinAlt className='w-[20px] h-[20px] md:min-w-[20px] md:min-h-[20px] stroke-indigo-800 lg:min-w-[20px] lg:min-h-[20px]' />
                    <p className='ml-1.5 text-sm 2xl:text-base truncate'>
                      {user.location}
                    </p>
                  </article>
                }

                { user.blog &&
                  <article className='flex items-center dark:shadow-none dark:bg-[#242424] dark:hover:bg-[#444444] bg-[#ececec] shadow-md hover:bg-[#fcfafa] transition-colors duration-300 rounded-lg px-3 py-2.5'>
                    <SvgLink className='w-[20px] h-[20px] md:min-w-[20px] md:min-h-[20px] stroke-indigo-800 lg:min-w-[20px] lg:min-h-[20px]' />
                    <a className='ml-1.5 text-sm 2xl:text-base truncate'
                      href={valideURL(user?.blog)}
                      rel='noreferrer'
                      target='_blank'>
                      {user?.blog}
                    </a>
                  </article>
                }

                { user.twitter_username &&
                  <article className='flex items-center dark:shadow-none dark:bg-[#242424] dark:hover:bg-[#444444] bg-[#ececec] shadow-md hover:bg-[#fcfafa] transition-colors duration-300 rounded-lg px-3 py-2.5'>
                    <SvgTwitter className='w-[20px] h-[20px] md:min-w-[20px] md:min-h-[20px] stroke-indigo-800 lg:min-w-[20px] lg:min-h-[20px]' />
                    <a data-type='twitter'
                      className='ml-1.5 text-sm 2xl:text-base'
                      href={`https://www.twitter.com/${user.twitter_username}`}
                      rel='noreferrer'
                      target='_blank'>
                      <span>@</span>{user.twitter_username}
                    </a>
                  </article>
                }

                { user.company &&
                  <article className='flex items-center dark:shadow-none dark:bg-[#242424] bg-[#ececec] shadow-md rounded-lg px-3 py-2.5'>
                    <SvgBuilding className='w-[20px] h-[20px] md:min-w-[20px] md:min-h-[20px] stroke-indigo-800 lg:min-w-[20px] lg:min-h-[20px]' />
                    <p className='ml-1.5 text-sm 2xl:text-base truncate'>
                      {user.company}
                    </p>
                 </article>
                }

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
export default UserInfoCard
