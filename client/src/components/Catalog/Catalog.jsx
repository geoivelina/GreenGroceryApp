export default function Catalog(){
    return(
        <section className="fruit_section layout_padding-bottom mt-5">
        <div className="container">
          <div className="heading_container">
            <hr/>
            <h2>
              Fresh Fruit
            </h2>
            <hr/>
          </div>
        </div>
        <div className="container-fluid">
    
          <div className="fruit_container">
            <div className="box">
              <img src="images/f-1.jpg" alt=""/>
              <div className="link_box">
                <h5> Orange </h5>
                <a href="">  Buy Now </a>
              </div>
            </div>
            <div className="box">
              <img src="images/f-2.jpg" alt=""/>
              <div className="link_box">
                <h5> Blueberry </h5>
                <a href=""> Buy Now </a>
              </div>
            </div>
            <div className="box">
              <img src="images/f-3.jpg" alt=""/>
              <div className="link_box">
                <h5> Banana </h5>
                <a href=""> Buy Now </a>
              </div>
            </div>
            <div className="box">
              <img src="images/f-4.jpg" alt=""/>
              <div className="link_box">
                <h5> Apple </h5>
                <a href=""> Buy Now </a>
              </div>
            </div>
            <div className="box">
              <img src="images/f-5.jpg" alt=""/>
              <div className="link_box">
                <h5> Mango </h5>
                <a href=""> Buy Now </a>
              </div>
            </div>
            <div className="box">
              <img src="images/f-6.jpg" alt=""/>
              <div className="link_box">
                <h5> Strawberry </h5>
                <a href="">  Buy Now </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}