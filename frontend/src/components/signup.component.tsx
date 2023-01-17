import React,{ Component } from "react";
export default class Signup extends Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 m-auto">
                        <div className="card mt-2 mb-2">
                            <div className="card-header">
                                <div className="card-title">
                                    <h6> Form Sign Up  </h6> 
                                </div>
                            </div> 
                            <div className="card-body">
                                <form id="signUpForm">  
                                    <div className="mb-3">
                                        <label>Username / Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter email"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label>Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Enter password"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <div className="custom-control custom-checkbox">
                                            <input
                                                type="checkbox"
                                                className="custom-control-input"
                                                id="customCheck1"
                                            />
                                            <label className="custom-control-label" htmlFor="customCheck1">
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-grid">
                                        <button type="button" className="btn btn-primary" >
                                            Submit 
                                        </button>
                                    </div>
                                    <p className="forgot-password text-right">
                                        Forgot 
                                    </p>
                                </form>
                            </div> 
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}