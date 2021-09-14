import BlogTextArea from '../components/activities/BlogTextArea'
import BlogPost from '../components/activities/BlogPost'

const Blog = (props) => {

        const makePostsBasedOnNumber = () => {
                return props.posts.map(post => {
                        return <BlogPost post={post}/>
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