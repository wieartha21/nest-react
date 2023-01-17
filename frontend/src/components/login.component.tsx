import React, { Component } from "react"; 
import { isPropertySignature } from "typescript";


export type MyProps = {
    // using `interface` is also ok
    name: string;
  };
type MyState = {
    count: number; // like this
  };
 
class Login extends Component<MyProps, MyState> {  

    private name : String = "";
      
    constructor(props : MyProps){
        super(props); 
        this.name = props.name; 
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 m-auto">
                        <div className="card mt-2 mb-2">
                            <div className="card-header">
                                <div className="card-title">
                                    <h6> Form Login { this.name }</h6> 
                                </div>
                            </div> 
                            <div className="card-body">
                                <form id="signInForm">  
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


export default Login;
 