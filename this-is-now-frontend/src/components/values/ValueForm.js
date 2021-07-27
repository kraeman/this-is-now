const NewValueForm = () => {

    
    
    return (
        <div className="container">
            <h3 className="form-title">Create a new todo</h3>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <form className="form-horizontal" >
                                    <div className="form-group">
                                        <label htmlFor="title" className="col-md-4 control-label">Value</label>
                                        <div className="col-md-5">
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="title"
                                            required
                                        />
                                        </div>


                                        
                                    </div>


                                    <label for="values">Add a Value</label>

                                    <select name="values" id="values">
                                        
                                    </select>


                                    <label for="scores">Assign a score </label>


                                    <div className="form-group">
                                        <div className="col-md-6 col-md-offset-4">
                                        <button type="submit" className="btn btn-default">Add</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default NewValueForm;