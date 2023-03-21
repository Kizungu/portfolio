import React, { Component} from 'react';
import axios from 'axios';

export default class ContactUs extends Component { 
    state ={
      input:{fullname:"",  email:"", subject:"", message:"", phone:""},
      isSent:false,
      noSent: false
    }


  handleSubmit = (event)=>{
    event.preventDefault();
    axios.post("/dev/send", this.state)
    .then(response=> {
      if(response.status === 200){
        this.setState({isSent:true});
      }else{
        this.setState({noSent:true});
      }

    })
    .catch(error=>console.log(error.message));

    this.setState({input:{ fullname:"", email:"", subject:"",  message:"" , phone:""}});
    

};
handleChange = (event)=>{
  const {name, value} = event.target;
    this.setState({input:{[name]:value}});
    this.setState({isSent:false});
    this.setState({noSent:false});
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
          <form className="form" onSubmit={this.handleSubmit}>

                <div className="input-wrapper">
                  <input type="text"   className="form-input" name="fullname" value={this.state.input.fullname} placeholder="Full name" onChange={this.handleChange} required />
                  <input type="email"  className="form-input"  placeholder="Email address" name='email' value={this.state.input.email} onChange={this.handleChange} required/>
                  <input type="phone"  className="form-input"  placeholder="Phone Number" name='phone' value={this.state.input.phone} onChange={this.handleChange} Optional/>
                </div>
                
                <input type="text"  className="form-input"  placeholder="Subject" name='subject' value={this.state.input.subject} onChange={this.handleChange} required/><br/>
                <textarea  className="form-input"  placeholder="Your Message" name='message' value={this.state.input.message} onChange={this.handleChange} required></textarea>
                {this.state.isSent && <p style={{color:"green", fontWeight:"bolder"}}>Message sent successfully</p>}
                {this.state.noSent && <p style={{color:"red", fontWeight:"bolder"}}>Message Failed</p>}
                <button className="form-btn" type="submit">Send Message</button>

            </form>
            
          </div>
        </section>
        );
  }
}