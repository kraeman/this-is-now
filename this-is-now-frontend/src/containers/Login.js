import React from "react";



export default function Login(props) {


  return (
    <div className="Login">
      <form className="form-horizontal" >
          <div className="form-group">
              <label htmlFor="title" className="col-md-4 control-label">Title</label>
              <div className="col-md-5">
              <input
                  className="form-control"
                  type="text"
                  name="title"
                
                  required
              />
              </div>
          </div>
          <div className="form-group">
              <label htmlFor="body" className="col-md-4 control-label">Todo</label>
              <div className="col-md-5">
                  <textarea
                      className="form-control"
                      name="body"
                  
                  />
              </div>
          </div>
          <div className="form-group">
              <div className="col-md-6 col-md-offset-4">
              <button type="submit" className="btn btn-default">Add</button>
              </div>
          </div>
      </form>
    </div>
  );
}
