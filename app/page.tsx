import { RenderPageContent } from 'components/renderPageContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Koen Verburg - Conrad the Programmer',
}

const Item = ({ label, value }) => {
  return (
    <div>
      <code className="relative rounded bg-muted mr-2 px-[0.3rem] py-[0.2rem] font-mono text-sm xfont-semibold">
        {label}
      </code>
      <strong>{value}</strong>
    </div>
  )
}

export default function Page() {
  return (
    <section className="md:w-1/2 m-auto flex flex-col">
      <RenderPageContent title="intro" />
    </section>
  )
}