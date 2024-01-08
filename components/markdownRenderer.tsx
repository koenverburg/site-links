"use client"
import Link from 'next/link'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Plausible from "plausible-tracker";

type MdxProps = {
  code: string
}

const { trackEvent } = Plausible({
  trackLocalhost: false,
  domain: 'links.conradtheprogrammer.com'
});

const handleClick = (label: string, url: string) => () =>
  trackEvent(
    "click",
    {
      props: {
        url,
        label,
      },
    },
    {
      url,
    }
  );

// Consume all of https://ui.shadcn.com/docs/components/typography

const CustomLink = (props) => {
  const href = props.href

  if (href.startsWith('/')) {
    return (
      <Link onClick={handleClick(props.children, href)} className="font-medium text-primary underline underline-offset-4" href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a className="font-medium text-primary underline underline-offset-4" {...props} />
  }

  return <a onClick={handleClick(props.children, href)} className="font-medium text-primary underline underline-offset-4" target="_blank" rel="noopener noreferrer" {...props} />
}

function H1(props) {
  return (
    <h1 className="scroll-m-20 mb-4 text-4xl font-extrabold tracking-tight lg:text-3xl">
      {props.children[1]}
    </h1>
  )
}
function P(props) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      {props.children}
    </p>
  )
}

const components = {
  a: CustomLink,
  h1: H1,
  p: P,
}

export function MarkdownRenderer({ code }: MdxProps) {
  const Component = useMDXComponent(code)
  return (
    <article className="prose prose-quoteless prose-neutral dark:prose-invert flex-col">
      <Component components={{ ...components }} />
    </article>
  )
}
