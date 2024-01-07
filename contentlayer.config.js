import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
// import rehypeToc from 'rehype-toc'

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: `**/*.page.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    headline: { type: 'string', required: true },
    description: { type: 'string', required: true },
    seoDescription: { type: 'string', required: true },
    published: { type: 'boolean', required: true },
    publishedAt: { type: 'string', required: true },
    image: {
      type: 'string',
    },
    category: {
      type: 'list',
      of: { type: 'string' },
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath,
    },
    structuredData: {
      type: 'object',
      resolve: (doc) => ({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',

        headline: doc.headline,

        datePublished: doc.publishedAt,
        dateModified: doc.publishedAt,

        published: doc.published,
        publishedAt: doc.publishedAt,

        description: doc.seoDescription,

        // keywords: doc.tags.join(', '),

        image: doc.image
          ? `${process.env.APP_PROTOCOL}://${process.env.APP_URL}${doc.image}`
          : `${process.env.APP_PROTOCOL}://${process.env.APP_URL}/api/og?title=${doc.title}`,
        url: `${process.env.APP_PROTOCOL}://${process.env.APP_URL}/blog/${doc._raw.flattenedPath}`,
        author: {
          '@type': 'Person',
          name: 'Conrad',
        },
      }),
    },
  },
}))


export default makeSource({
  contentDirPath: './content',
  // contentDirInclude: ['./content/blog', './content/redirect'],
  documentTypes: [Page],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,

      // [
      //   rehypeToc,
      //   {
      //     position: 'afterbegin',
      //   },
      // ],

      [
        // Part of leerob's setup
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push('line--highlighted')
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ['word--highlighted']
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
})