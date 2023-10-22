import Link from 'next/link'

const fetchRepoContents = async (name: string) => {
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
    _links: {
        html: string
    }
}

export default async ({ name }: Props) => {
    const contents = await fetchRepoContents(name)
    const dires = contents.filter((item: any) => item.type === 'dir')
    console.log(dires)

    return (
        <>
            <h3>Directories</h3>
            <ul>
                {dires.map((directory: Directory) => (
                    <li key={directory.path}>
                        <Link href={`${directory._links.html}`} target="_blank">{directory.path}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}