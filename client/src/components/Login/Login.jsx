export default function Login(){
    return (
      <section className="form_section layout_padding-bottom mt-5">
      <div className="container-fluid">
        <div className="row">
          <div className="offset-lg-2 col-md-12 offset-md-1">
            <div className="heading_container">
              <hr />
              <h2>Login in Your Account</h2>
              <hr />
            </div>
          </div>
        </div>
          <div className="form_padding2-top">
            <div className="row">
              <div className="col-lg-4 offset-lg-4 col-md-5 offset-md-1">
                <form action="">
                  <div className="login_form-container">
                    <div>
                      <div>
                        <input type="email" placeholder="Email" />
                      </div>
                      <div>
                        <input type="text" placeholder="Password" />
                      </div>
                  
                      <div>
                        <button type="submit"> Send </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}