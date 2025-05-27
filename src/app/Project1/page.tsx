/* import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"
import { unstable_cache } from 'next/cache' */
'use client'; // if using App Router (Next.js 13+)

import { useEffect, useState } from 'react';

export default function HomePage() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,flags,region')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(err => console.error('Error fetching countries:', err));
  }, []);

  return (
    <main>
      <h1>🌍 Countries of the World</h1>
      <ul>
        {countries.map((country: any, index) => (
          <li key={index}>
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} width={30} />
            {country.name.common} - {country.region}
          </li>
        ))}
      </ul>
    </main>
  );
}

/* import { db, posts } from '@/lib/db'



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
} */