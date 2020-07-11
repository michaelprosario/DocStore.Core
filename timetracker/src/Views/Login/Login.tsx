import React from "react";

export class Login extends React.Component {
  render() {
    return (
      <div>
        <div className="main">
          <div className="col-md-6 col-sm-12">
            <div className="login-form">
              <h3>Welcome To Time Tracker</h3>
              <div className="alert alert-warning" role="alert">
                Enter user name and password
              </div>

              <form>
                <div className="form-group">
                  <label>User Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="User Name"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" className="btn">
                  Login
                </button>
                <button type="submit" className="btn">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
