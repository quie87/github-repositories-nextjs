'use client'

import { useState } from 'react'

type props = {
    getSearchResults: (posts: IPost[]) => void
}

export default ({ getSearchResults }: props) => {
    const [query, setQuery] = useState('')

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()

        const res = await fetch(`/api/posts/search?query=${query}`)
        const posts: IPost[] = await res.json()
        getSearchResults(posts)
    }

    return (
        <form onSubmit={handleSubmit} className='search-form'>
            <input type="text" className='search-input' placeholder='Search posts' value={query} onChange={(e) => setQuery(e.target.value)} />
            <button className='search-button' type='submit'>
                Search
            </button>
        </form>
    )
}
