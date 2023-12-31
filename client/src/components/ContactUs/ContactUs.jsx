
export default function ContactUs(){
    return (
        <section className="form_section layout_padding-bottom mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="offset-lg-2 col-md-12 offset-md-1">
              <div className="heading_container">
                <hr />
                <h2>Get In Contact With Us</h2>
                <hr />
              </div>
            </div>
          </div>
          <div className="layout_padding2-top">
            <div className="row">
              <div className="col-lg-4 offset-lg-4 col-md-5 offset-md-1">
                <form action="">
                  <div className="contact_form-container">
                    <div>
                      <div>
                        <input type="text" placeholder="Full Name" />
                      </div>
                      <div>
                        <input type="email" placeholder="Email" />
                      </div>
                      <div>
                        <input type="text" placeholder="Phone Number" />
                      </div>
                      <div>
                        <input type="text" className="message_input" placeholder="Message" />
                      </div>
                      <div>
                        <button type="submit"> Send </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {/* <div className="col-md-6 px-0">
                <div className="map_container">
                  <div className="map-responsive">
                    <iframe
                      src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                      width={600}
                      height={300}
                      frameBorder={0}
                      style={{ border: 0, width: "100%", height: "100%" }}
                      allowFullScreen=""
                    />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    )
}