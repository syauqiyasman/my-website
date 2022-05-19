import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import sortByDate from '@/lib/sort-by-date'
import BlogList from '@/components/blog-list'
import { NextSeo } from 'next-seo'
import { PostsItems } from '@/types/posts'

type PostsProps = {
  posts: PostsItems[]
}

export default function HomePage({ posts }: PostsProps) {
  return (
    <>
      <NextSeo
        title="Your Name"
        description="Hello, welcome to my website"
      />
      <div className="mx-auto px-4 max-w-screen-md">
        {posts.map((post) => (
          <BlogList key={post.slug} post={post} />
        ))}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontmatter } = matter(markdownWithMeta)
    return {
      slug,
      frontmatter,
    }
  })
  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}
