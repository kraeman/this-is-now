const ErrorPage = (props) => {
    return (
        <>  
            <h3>Uh Oh - Something went wrong. Please Try Again</h3>
            <button onClick={() => props.clearError()} >Head Back to previous page</button>
        </>
    )
}

export default ErrorPage;