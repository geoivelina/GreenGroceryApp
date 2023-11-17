import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as fruitService from "../../services/fruitService";

export default function FruitDetails() {
    const [fruit, setFruit] = useState([]);
    const { fruitId } = useParams();

    useEffect(() => {
        const result = fruitService.getFruitBy(fruitId).then((fruit) => {
            setFruit(fruit);
        });
    }, [fruitId]);

    return (
        <section className="about_section ">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 px-0">
                        <div className="img-box">
                            <img src={fruit.imageUrl} alt="" />
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
                            <Link to="/shop"> Shop Now </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
