import { Link } from "react-router-dom";

export default function CatalogItem({_id, fruitName, imageUrl}) {
    return (
        <div className="box">
            <img src={imageUrl} alt="" />
            <div className="link_box">
                <h5> {fruitName} </h5>
                <Link to={`/fruits/${_id}`} > Details </Link>
            </div>
        </div>
    );
}
