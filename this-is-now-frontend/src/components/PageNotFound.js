const PageNotFound = (props) => {
    return (
        <>  
            <h3>Uh Oh - Page does not exist.</h3>
            <button onClick={() => props.props.history.goBack()}>Head Back to previous page</button>
        </>
    )
}

export default PageNotFound;