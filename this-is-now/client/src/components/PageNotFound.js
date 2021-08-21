const PageNotFound = (props) => {
    return (
        <>  
            <h3>Uh Oh - Page does not exist or you do not have access</h3>
            <button onClick={() => props.props.history.goBack()}>Head Back to previous page</button>
        </>
    )
}

export default PageNotFound;