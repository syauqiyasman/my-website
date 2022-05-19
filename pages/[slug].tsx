import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import { NextSeo } from 'next-seo'
import BlogImage from '@/components/blog-image'
import Breadcrumb from '@/components/breadcrumb'
import MarkdownBody from '@/components/markdown.styled'

type SlugProps = {
  params: {
    slug: string
  }
}

type PostProps = {
  content: string
  frontmatter: {
    title: string
    date: string
    excerpt: string
    image: string
  }
}

export default function BlogPage({ frontmatter, content }: PostProps) {
  return (
    <>
      <NextSeo
        title={frontmatter.title}
        description={frontmatter.excerpt}
      />
      <div className="mx-auto px-4 max-w-screen-md">
        <div className="pt-6 pb-12">
          <Breadcrumb />
          <h1 className="py-4 text-3xl font-semibold text-blue-500">{frontmatter.title}</h1>
          <span className="text-base font-medium text-gray-600">{frontmatter.date}</span>
          <BlogImage className="mt-6" src={frontmatter.image} alt={frontmatter.title} />
          <MarkdownBody
            className="py-6"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: marked(content) }}
          />
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }: SlugProps) {
  const markdownWithMeta = fs.readFileSync(path.join('posts', `${slug}.md`), 'utf-8')
  const { data: frontmatter, content } = matter(markdownWithMeta)
  return {
    props: {
      frontmatter,
      content,
    },
  }
}
