import Layout from '../components/Layout'
import Image from 'next/image'

const links = [
  { label: 'Github',    href: 'https://github.com/koenverburg'                },
  { label: 'Twitter',   href: 'https://twitter.com/koenverburg'               },
  { label: 'Twitch',    href: 'https://www.twitch.tv/conradtheprogrammer'     },
  { label: 'Instagram', href: 'https://www.instagram.com/conradtheprogrammer' },
  { label: 'Blog',      href: 'https://koenverburg.medium.com'                },
  { label: 'Kofi',      href: 'https://www.buymeacoffee.com/conradcoffee'     }
]

const IndexPage = () => (
  <Layout title="Conrad The Programmer">
    <div className="text-center mb-4">
      <Image
        width="460"
        height="460"
        alt="Avatar"
        src="/assets/avatar-github.jpg"
        className="rounded-full w-32 mb-4 mx-auto"
      />
      <h5 className="text-xl font-medium leading-tight mb-2">Conrad The Programmer</h5>
      <p className="text-gray-500">I write code and share my coding journey on these social media platforms</p>
    </div>

    <ul className="flex flex-col justify-center max-w-sm mx-auto">
      {links.map(link =>
        <li key={link.label} className={`mb-4 p-1 text-center rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500`}>
          <a href={link.href} className={`px-4 py-2 block text-black font-semibold rounded-full bg-white`} target="_blank">
            {link.label}
          </a>
        </li>
      )}
    </ul>

  </Layout>
)

export default IndexPage
