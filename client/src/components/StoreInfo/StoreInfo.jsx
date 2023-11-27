export default function StoreInfo(){
    return(
        <section className="info_section layout_padding">
        <div className="container">
          <div className="info_logo">
            <h2>  GreenGrocery  </h2>
            <h2>!!! THIS SECTION DOES NOT WORK !!!</h2>
          </div>
          <div className="info_contact">
            <div className="row">
              <div className="col-md-4">
                  <img src="images/location.png" alt=""/>
                  <span>  Some Address Here  </span>
              </div>
              <div className="col-md-4">
                  <img src="images/call.png" alt=""/>
                  <span>  Call : +0123 12334567890 </span>
              </div>
              <div className="col-md-4">
                  <img src="images/mail.png" alt=""/>
                  <span>  greengrocery@mail.com  </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-lg-9">
              <div className="info_form">
                <form action="">
                  <input type="text" placeholder="Enter your email"/>
                  <button>
                    subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="info_social">
                <div>
                  <a href="">
                    <img src="images/facebook-logo-button.png" alt=""/>
                  </a>
                </div>
                <div>
                  <a href="">
                    <img src="images/twitter-logo-button.png" alt=""/>
                  </a>
                </div>
                <div>
                  <a href="">
                    <img src="images/linkedin.png" alt=""/>
                  </a>
                </div>
                <div>
                  <a href="">
                    <img src="images/instagram.png" alt=""/>
                  </a>
                </div>
              </div>
            </div>
          </div>
    
        </div>
      </section>
    )
}