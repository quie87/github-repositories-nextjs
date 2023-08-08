import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Welcome to KTR Web development</h1>
        <ul>
            <li>
                <Link href="/home">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/about/team">Team</Link>
            </li>
        </ul>
    </div>
  )
}