import React from "react";

export default function Sidebar({ logedin, isLogedin, submitLogout }) {
  

  return (
    <div>
      <div id="sidebar">
        <header>
          <a href="/">My App</a>
        </header>
        <ul className="nav">
          {!logedin ? (
            <div>
              <li>
                <i className="zmdi zmdi-comment-more"></i> Home
              </li>
              <li>
                <i className="zmdi zmdi-comment-more"></i> About
              </li>
              <li>some thing else</li>
            </div>
          ) : (
            <div>
              <li>
                <i className="zmdi zmdi-comment-more"></i> Home
              </li>
              <li>
                <i className="zmdi zmdi-comment-more"></i> profile
              </li>
              <li>account</li>
              <li>
                <button
                  type="submit"
                  className="btn btn-danger"
                  onClick={submitLogout}
                >
                  log out
                </button>
              </li>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}
