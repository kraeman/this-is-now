import React, { useState } from 'react';

const BlogTextArea = (props) => {

    const [content, setContent] = useState("")

    const handleOnContentChange = (e) => {
        setContent(e.target.value)
    }

    const handleOnSubmitPost = () => {
        
    }
    
        return (
            <>
                <textarea
                    type="text"
                    value={content}
                    onChange={(e) => handleOnContentChange(e)}
                    value={content}
                    required
                />
                <button onClick={() => handleOnSubmitPost()}>Submit Post</button>
            </>
        )
}

export default BlogTextArea;