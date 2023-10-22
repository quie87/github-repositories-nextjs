'use client'
import { useState, useEffect } from 'react'
import { Posts } from './components/Posts'
import LoadingPage from './loading'
import { PostsSearch } from './components/PostsSearch'

export default function Home() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/posts')
      const data = await res.json()
      setPosts(data)
      setLoading(false)
    }

    fetchPosts()
  }, [])

  if (loading) {
    return <LoadingPage />
  }

  return (
    <div>
      <h1>Welcome to KTR Web development</h1>
      <PostsSearch getSearchResults={(results: IPost[]): void => setPosts(results)} />
      <Posts posts={posts} />
    </div>
  )
}