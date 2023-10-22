import Link from 'next/link'

async function fetchRepoContents(name: string) {
    const response = await fetch(`https://api.github.com/repos/quie87/${name}/contents`, {
        next: {
            revalidate: 60 * 60 * 24
        }
    });
    return await response.json();
}

interface Props {
    name: string;
}

interface Directory {
    path: string;
}

export const RepoDirs = async ({ name }: Props) => {
    const contents = await fetchRepoContents(name)
    const dires = contents.filter((item: any) => item.type === 'dir')

    return (
        <>
            <h3>Directories</h3>
            <ul>
                {dires.map((dir: Directory) => (
                    <li key={dir.path}>
                        <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}