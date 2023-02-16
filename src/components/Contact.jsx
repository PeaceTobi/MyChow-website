import React from 'react'
// import googleMapReact from 'google-map-react';
const Contact = () => {
  return (
    <div className='contact-con'>
        <div className='contact-left'>
        <iframe
                className="position-relative rounded w-100 h-100"
                
                // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253229.157682037!2d3.764972801140134!3d7.3868519425885255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103993aaaa99dbcf%3A0x3ede4603c33f260d!2sWest%20Grille%20Restaurant!5e0!3m2!1sen!2sng!4v1650602754333!5m2!1sen!2sng"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.8851856965694!2d3.34320711426848!3d7.139273617680197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x61fc9ec0c3d0a852!2sNYSC%20Mini%20Secretariat%20%2C%20Oke%20Ilewo%2C%20Abeokuta%20Ogun%20State!5e0!3m2!1sen!2sng!4v1640728238812!5m2!1sen!2sng"
                frameborder="0"
                style={{ minheight: 200, border: 0 }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
                title="myMap"
              ></iframe>
        </div>
        <div className='contact-right'>
        <div className="col-md-10">
                        <div className="wow fadeInUp" data-wow-delay="0.2s">
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                                            <label for="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: 150}}></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn-1" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
        </div>
    </div>
  )
}

export default Contact