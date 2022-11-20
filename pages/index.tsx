import Link from 'next/link'
import Layout from '../components/Layout'

const links = [
  { gradient: 'from-[#6EE7B7] to-[#FDE68A]', label: 'Github', href: 'https://github.com/koenverburg' },
  { gradient: 'from-[#6EE7B7] to-[#FDE68A]', label: 'Twitter', href: 'https://twitter.com/koenverburg' },
  { gradient: 'from-[#6EE7B7] to-[#FDE68A]', label: 'Twitch', href: 'https://www.twitch.tv/conradtheprogrammer' },
  { gradient: 'from-[#6EE7B7] to-[#FDE68A]', label: 'Instagram', href: 'https://www.instagram.com/conradtheprogrammer' },
  { gradient: 'from-[#6EE7B7] to-[#FDE68A]', label: 'Blog', href: 'https://koenverburg.medium.com' },
  { gradient: 'from-[#6EE7B7] to-[#FDE68A]', label: 'Kofi', href: 'https://www.buymeacoffee.com/conradcoffee' }
]

const IndexPage = () => (
  <Layout title="Conrad The Programmer">
    <div className="text-center mb-4">
      <img
        src="/assets/avatar-github.jpg"
        className="rounded-full w-32 mb-4 mx-auto"
        alt="Avatar"
      />
      <h5 className="text-xl font-medium leading-tight mb-2">Conrad The Programmer</h5>
      <p className="text-gray-500">I write code and share my coding journey on these social media platforms</p>
    </div>

    <ul className="text-center">
      {links.map(link =>
        <li className={`rounded shadow-lg bg-gradient-to-r ${link.gradient}`}>
          <a href={link.href} className={`block mb-4 px-6 py-4`} target="_blank">
            {link.label}
          </a>
        </li>
      )}
    </ul>

  </Layout>
)

export default IndexPage
