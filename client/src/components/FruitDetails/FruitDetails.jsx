import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as fruitService from "../../services/fruitService";
import Path from "../../path";

export default function FruitDetails() {
    const [fruit, setFruit] = useState({});
    const { fruitId } = useParams();

    useEffect(() => {
        const result = fruitService.getFruitBy(fruitId).then(setFruit);
    }, [fruitId]);

    return (
        <section className="about_section ">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 px-0">
                            <img src={fruit.imageUrl} alt="" />
                        <div className="img-box">
                            <h3>WHERE IS THE FRUITE PHOTO</h3>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="detail-box">
                            <div className="heading_container">
                                <hr />
                                <h2> {fruit.fruitName} </h2>
                            </div>
                            <p>{fruit.details}</p>
                            <Link to={Path.Shop}> Shop Now </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
