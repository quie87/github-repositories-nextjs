import Link from 'next/link'
import React from 'react'

export default () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="logo">
                    <Link href="/">KTR Web Development</Link>
                </div>
                <div className="links">
                    <Link href="/about">About</Link>
                    <Link href="/about/team">About our team</Link>
                    <Link href="/code/repos">Code</Link>
                </div>
            </div>
        </header>
    )
}