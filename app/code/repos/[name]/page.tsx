import { Suspense } from 'react'
import Link from 'next/link'
import { Repo } from '@/app/components/Repo'
import { RepoDirs } from '@/app/components/RepoDirectories'

type props = {
    params: {
        name: string
    }
}

export const RepoPage = ({ params: { name } }: props) => {
    return (
        <div className='card'>
            <Link href="/code/repos" className='btn btn-back'>Back To Repositories</Link>
            <Suspense fallback={<p>Loading repo...</p>}>
                <Repo name={name} />
            </Suspense>
            <Suspense fallback={<p>Loading directories...</p>}>
                <RepoDirs name={name} />
            </Suspense>
        </div>
    )
}