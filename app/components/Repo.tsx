import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'

const fetchRepo = async (name: string) => {
    const response = await fetch(`https://api.github.com/repos/quie87/${name}`, {
        next: {
            revalidate: 60 * 60 * 24
        }
    });
    return await response.json();
}

type props = {
    name: string
}

export default async ({ name }: props) => {
    const repo = await fetchRepo(name);

    return (
        <>
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>
            <div className='card-stats'>
                <div className="card-stat">
                    <FaStar />
                    <span>{repo.stargazers_count}</span>
                </div>
                <div className="card-stat">
                    <FaCodeBranch />
                    <span>{repo.forks_count}</span>
                </div>
                <div className="card-stat">
                    <FaEye />
                    <span>{repo.watchers_count}</span>
                </div>
            </div>
        </>
    )
}