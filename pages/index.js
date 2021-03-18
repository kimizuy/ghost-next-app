import { getPosts } from '../lib/posts'
import Link from 'next/link'

export default function Home({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/posts/${post.slug}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export async function getStaticProps() {
  const posts = await getPosts()

  return {
    props: { posts }
  }
}
