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
    <section className='mt-6 mb-6 dark:shadow-none dark:bg-[#303030] dark:text-neutral-200 rounded-lg shadow-md bg-[#f6f6f7] text-neutral-800'>
      <div className='container mx-auto flex flex-col'>
        <div className='flex flex-col sm:flex-row p-5'>
          <div className='sm:w-1/3 sm:mr-4 text-center mb-4 md:mb-0'>
            <div className='text-sm overflow-hidden inline-flex items-center justify-center'>
              { user.avatar_url && (
                  <Image
                    className={ user.avatar_url ? 'rounded-full object-contain' : null }
                    src={user.avatar_url}
                    width={96}
                    height={96}
                    alt={`user ${user.login}`}
                    priority />
              )}
            </div>

            <div className='flex flex-col items-center text-center justify-center mt-2'>
              <p className='text-sm md:text-base font-semibold break-all'>
                  <span>@</span>{user.login}
              </p>

              <div className='w-36 h-1 rounded my-2 bg-gradient-to-r from-indigo-700 to-cyan-400'></div>
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
                  className='flex items-center gap-x-1 mt-4 rounded-lg px-5 py-1.5 hover:from-indigo-900 hover:to-cyan-600 transition-all duration-300 bg-gradient-to-r from-indigo-700 to-cyan-400'
                  href={user.html_url}
                  rel='noreferrer'
                  target='_blank'>
                    <SvgGitHub className='fill-neutral-800' />
                    <span className='mt-0.5 text-sm 2xl:text-base font-medium text-neutral-800'>GitHub</span>
                </a>
              </div>
           </div>

          <div className='sm:w-2/3 h-full'>
            { user.bio &&
              <p className='text-center md:text-left text-base 2xl:text-lg font-semibold mb-4'>
                {user.name}
              </p>
            }

            { user.bio &&
              <p className='h-full md:min-h-[96px] leading-relaxed text-sm 2xl:text-base font-medium mb-4'>
                {user.bio}
              </p>
            }

            <div className='w-full rounded-lg p-[2.5px] bg-gradient-to-r from-indigo-700 to-cyan-400'>
              <div className='grid dark:bg-[#303030] bg-[#f6f6f7] rounded-md grid-cols-3 py-5 font-semibold'>
                <article className='repo-card'>
                  <div className='repo-svg'>
                    <SvgRepository />
                  </div>
                  <p className='repo-title'>
                    Repos
                  </p>
                  <p className='text-base'>
                    {user.public_repos}
                  </p>
                </article>

                <article className='repo-card'>
                  <div className='repo-svg'>
                    <SvgFollowers />
                  </div>
                  <p className='repo-title'>
                    Followers
                  </p>
                  <p className='text-base'>
                    {user.followers}
                  </p>
                </article>

                <article className='repo-card'>
                  <div className='repo-svg'>
                    <SvgFollowings />
                  </div>
                  <p className='repo-title'>
                    Following
                  </p>
                  <p className='text-base'>
                    {user.following}
                  </p>
                </article>
              </div>
            </div>

            <div className='flex flex-col mt-4'>
              <div className='grid gap-4 grid-cols-1 md:grid-cols-2 font-medium'>

                { user.location &&
                  <article className='media-card'>
                    <div className='media-bg'>
                      <SvgPinAlt className='media-svg' />
                    </div>
                    <p className='media-info'>
                      {user.location}
                    </p>
                  </article>
                }

                { user.blog &&
                  <article className='media-card media-hover'>
                    <div className='media-bg'>
                      <SvgLink className='media-svg' />
                    </div>
                    <a className='media-info'
                      href={valideURL(user?.blog)}
                      rel='noreferrer'
                      target='_blank'>
                      {user?.blog}
                    </a>
                  </article>
                }

                { user.twitter_username &&
                  <article className='media-card media-hover'>
                    <div className='media-bg'>
                      <SvgTwitter className='media-svg' />
                    </div>
                    <a data-type='twitter'
                      className='media-info'
                      href={`https://www.twitter.com/${user.twitter_username}`}
                      rel='noreferrer'
                      target='_blank'>
                      <span>@</span>{user.twitter_username}
                    </a>
                  </article>
                }

                { user.company &&
                  <article className='media-card'>
                    <div className='media-bg'>
                      <SvgBuilding className='media-svg' />
                    </div>
                    <p className='media-info'>
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
