import React from 'react'

export default function Login({
    email,
    password,
    submitHandel,
    setEmail,
    setPassword,
    onchangeEmail,
    onchangePasswprd,
    logedin
}) {
    const user = JSON.parse(window.localStorage.getItem("email"));
    console.log("email", );
    return (
        <div>
               {
               !logedin ? (
                <div>
                    <form>
                        <div className="form-group">
                            <label for="inputEmail">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={onchangeEmail}
                                id="inputEmail"
                                placeholder="Email"
                            />
                        </div>
                        <div className="form-group">
                            <label for="inputPassword">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={onchangePasswprd}
                                id="inputPassword"
                                placeholder="Password"
                            />
                        </div>
                        <div className="form-group">
                            <label className="form-check-label">
                                <input type="checkbox" /> Remember me
                            </label>
                        </div>
                        <div className="sign-btn">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                onClick={submitHandel}
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>

            ):(
            <div><h1>hello {user}</h1></div>
            )
      
            }
        </div>
         
        
    );
}
