import React, { Component } from 'react';
export default class Blog extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1><span>My Blog </span></h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  {
                    resumeData.blog && resumeData.blog.map((item, index)=>{
                      return(
                        <li key={index}>
                          <div className='blogItem'>
                            <img src={item.img} alt="" className="blogImg"/>
                             <a href={item.url} target="_blank" rel="noopener noreferrer" className="blogTitle"><p> {item.title}</p></a> 
                           
                          </div>
                        </li>
                        
                      )
                    })
                  }
                </ul>
              </div> {/* div.flexslider ends */}
            </div> {/* div.flex-container ends */}
          </div> {/* row ends */}
        </div>  {/* text-container ends */}
      </section>
        );
  }
}