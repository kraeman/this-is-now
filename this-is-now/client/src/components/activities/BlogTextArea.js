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
                    value={this.state.description}
                    onChange={(e) => handleOnContentChange(e)}
                    value={content}
                    required
                />
                <button onClick={() => handleOnSubmitPost()}></button>
            </>
        )
}

export default BlogTextArea;