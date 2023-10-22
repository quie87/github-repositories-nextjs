interface props {
    posts: IPost[]
}

export const Posts = ({ posts }: props) => {
    return (
        <div className='posts'>
            {posts.map((post: IPost) => (
                <div key={post.id} className='card'>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}