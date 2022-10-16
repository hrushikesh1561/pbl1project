import React, { Component } from "react";
import logo from "./assets/logo.png";

class login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.email.value);

    if (!e.target.email.value) {
      alert("Email is required");
    } else if (!e.target.email.value) {
      alert("Valid email is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else if (
      e.target.email.value === "me9848@gmail.com" &&
      e.target.password.value === "123456"
      
    ) {
      alert("Successfully logged in");
      e.target.email.value = "";
      e.target.password.value = "";
    
    } else {
      alert("Wrong email or password combination");
    }
  };

  
  render() {
    return (
      <div className="App">
        <img src={logo} className="logo" alt="Business view - Reports" />
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="nome@email.com.br" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <button className="primary">SUBMIT</button>
        </form>
        
      </div>
    );
  }
}

export default login;