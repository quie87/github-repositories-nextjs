type post = {
    id: number,
    title: string,
    body: string,
    userId: string,
}

async function fetchPosts() {
    const response = await fetch('http://localhost:3000/api/posts');

    return await response.json();
}

const Posts = async () => {
    const posts = await fetchPosts();

    return (
        <div className='posts'>
            {posts.map((post: post) => (
                <div key={post.id} className='card'>
                    <h2>{post?.title}</h2>
                    <p>{post?.body}</p>
                </div>
            ))}
        </div>
    )
}

export default Posts