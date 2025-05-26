import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"
import { unstable_cache } from 'next/cache'
import { db, posts } from '@/lib/db'


const getPosts = unstable_cache(
  async () => {
    return await db.select().from(posts)
  },
  ['posts'],
  { revalidate: 3600, tags: ['posts'] }
)

export default async function Page() {
  const data = await fetch('https://restcountries.com/v3/all')
  const posts = await data.json()
  const allPosts = await getPosts()
  return (
    <ul>
      {posts.map((post: { id: Key; title: string }) => (
        <li key={post.id}>{post.title}</li>
      ))}
      {allPosts.map((post: { id: Key; title: string }) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}