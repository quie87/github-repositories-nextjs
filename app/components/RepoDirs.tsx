import Link from 'next/link'

async function fetchRepoContents(name: string) {
    await new Promise(resolve => setTimeout(resolve, 3000));

    const response = await fetch(`https://api.github.com/repos/quie87/${name}/contents`);
    return await response.json();
}

interface Props {
    name: string;
}

interface Directory {
    path: string;
}

const RepoDirs = async ({ name }: Props) => {
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

export default RepoDirs