import Image from 'next/image'
import {Layout} from '../components/Layout'

const links = [
  { label: 'Book a Call', href: 'https://appointments.lokiapp.live/consultant/WUJFxrwyO0MMZj6F9lEKOsVFtpx2', description: 'Looking to make your Dev Team move faster to production, career advice, or something else, Book a Video Call'},
  { label: 'Github',         href: 'https://github.com/koenverburg'                },
  { label: 'Twitter',        href: 'https://twitter.com/koenverburg'               },
  { label: 'Twitch',         href: 'https://www.twitch.tv/conradtheprogrammer'     },
  { label: 'Instagram',      href: 'https://www.instagram.com/conradtheprogrammer' },
  { label: 'Blog',           href: 'https://koenverburg.medium.com'                },
  { label: 'Kofi',           href: 'https://www.buymeacoffee.com/conradcoffee'     }
]

const useImagePrefix = () => {
  const isGithubActions = process.env.isGithubActions
  const prefix = process.env.prefix

  if (isGithubActions) {
    return prefix
  }

  return ''
}

const IndexPage = () => {
  const prefix = useImagePrefix()
  return (
    <Layout title="Conrad The Programmer">
      <div className="text-center mb-4">
        <Image
          width="460"
          height="460"
          alt="Avatar"
          src={`${prefix}/assets/avatar-github.jpg`}
          className="rounded-full w-32 mb-4 mx-auto"
        />
        <h5 className="text-xl font-medium leading-tight mb-2">Conrad The Programmer</h5>
        <p className="text-gray-500">I write code and share my coding journey on these social media platforms</p>
      </div>

      <ul className="flex flex-col justify-center max-w-sm mx-auto">
        {links.map(link =>
          <li key={link.label} className="mb-4">
            <span className={`block mb-2 p-1 text-center rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500`}>
              <a href={link.href} className={`px-4 py-2 block text-black font-semibold rounded-full bg-white`} target="_blank"  rel="noreferrer">
                {link.label}
              </a>
            </span>
            {!link.description ? null : <p className={`text-center text-gray-500`}>{link.description}</p>}
          </li>
        )}
      </ul>
    </Layout>
  )
}

export default IndexPage
