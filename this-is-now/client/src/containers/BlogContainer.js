
const Blog = (props) => {

        const makePostsBasedOnNumber = () => {
                return props.posts.map(post => {
                        return <Post post={post}/>
                });
        }

        return (
                <>
                        <BlogTextArea/>
                        {makePostsBasedOnNumber}
                </>
        )
}

export default Blog;