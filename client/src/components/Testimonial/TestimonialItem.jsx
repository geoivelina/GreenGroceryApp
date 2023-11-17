
export default function TestimonialItem({_id, customerName, imageUrl, title, text}) {
   
    return (

            <div className="client_container layout_padding-top">
                <div className="img-box">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="detail-box">
                    <h5>{customerName}</h5>
                    <p>
                        <img src="images/left-quote.png" alt="" />
                        <span>{title}</span>
                        <img src="images/right-quote.png" alt="" /> <br />
                        {text}
                    </p>
                </div>
            </div>
    );
}
