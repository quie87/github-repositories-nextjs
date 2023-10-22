'use client'
import { useState, useEffect } from 'react'
import { Posts } from './components/Posts'

export default function Home() {
  const [posts, setPosts] = useState<IPost[]>([])
  return (
    <div>
      <h1>Welcome to KTR Web development</h1>
      <Posts />
      <Posts posts={posts} />
    </div>
  )
}