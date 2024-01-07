import { allPages } from 'contentlayer/generated'
import { MarkdownRenderer } from './markdownRenderer'

export function RenderPageContent({ title }: { title: string}) {
  const page = allPages.find(p => p.title === title)

  return (
    <main>
      {page && <MarkdownRenderer code={page.body.code} />}
    </main>
  )
}