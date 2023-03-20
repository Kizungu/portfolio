import React, { Component} from 'react';
import axios from 'axios';

export default class ContactUs extends Component { 
    state ={
      fullname:"", 
      email:"", 
      subject:"", 
      message:""
    }


  handleSubmit = (event)=>{
    event.preventDefault();
    axios.post("", this.state)
};
handleChange = (event)=>{
  const {name, value} = event.target;
    this.setState({[name]:value})
}

  render() {

    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
          <form className="form" onClick={this.handleSubmit}>

                <div className="input-wrapper">
                  <input type="text"   className="form-input" name="fullname" value={this.state.fullname} placeholder="Full name" onChange={this.handleChange} />
                  <input type="email"  className="form-input"  placeholder="Email address" name='email' value={this.state.email} onChange={this.handleChange} />
                </div>
                <input type="text"  className="form-input"  placeholder="Subject" name='subject' value={this.state.subject} onChange={this.handleChange} /><br/>
                <textarea  className="form-input"  placeholder="Your Message" name='message' value={this.state.message} onChange={this.handleChange} ></textarea>
                <button className="form-btn" type="submit">Send Message</button>

            </form>
          </div>
        </section>
        );
  }
}