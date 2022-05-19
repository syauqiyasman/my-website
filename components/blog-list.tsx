import Link from 'next/link'
import { PostsItems } from '@/types/posts'
import Button from './button'
import BlogImage from './blog-image'

type PostsProps = {
  post: PostsItems
}

export default function BlogList({ post }: PostsProps) {
  return (
    <div className="py-12">
      <span className="text-base font-medium text-gray-600">{post.frontmatter.date}</span>
      <Link href={`/${post.slug}`}>
        <a className="hover:underline text-blue-500 focus:outline-none focus:underline">
          <h1 className="mt-2 mb-4 text-3xl font-semibold">{post.frontmatter.title}</h1>
        </a>
      </Link>
      <p className="mb-6 text-lg font-base text-black">
        {post.frontmatter.excerpt}
      </p>
      <BlogImage className="mb-6" src={post.frontmatter.image} alt={post.frontmatter.title} />
      <Button href={post.slug}>Continue Reading</Button>
    </div>
  )
}
