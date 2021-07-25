import React from "react";



export default function SignUp(props) {


    return (
        <div className="SignUp">
            <br/>
            <br/>
            <br/>
                    <div>
                <label for="username">Username: </label>
                <input type="text" id="username" name="username">
                </input>
            </div>
            <br/>
            <div>
                <label for="pass">Password: </label>
                <input type="password" id="pass" name="password"
                    minlength="8" required>
                        </input>
            </div>
            <br/>

            <div>
                <label for="pass">Confirm Password: </label>
                <input type="password" id="pass" name="password"
                    minlength="8" required>
                        </input>
            </div>

            <br/>
    
            <input type="submit" value="Sign in"></input>
        </div>
      );
}