import { useEffect, useState } from "react";
import CatalogItem from "./catalogItem";

import * as fruitService from "../../services/fruitService";

export default function Catalog() {
    const [fruits, setFruits] = useState([]);

    useEffect(() => {
        fruitService.getAllFruits()
            .then(result => setFruits(result))
            .catch(err =>{
                console.log(err);
            });
    }, []);
    return (
        <section className="fruit_section layout_padding-bottom mt-5">
            <div className="container">
                <div className="heading_container">
                    <hr />
                    <h2> Fresh Fruit </h2>
                    <hr />
                </div>
            </div>
            <div className="fruit_container">
                {fruits.map((fruit) => (
                    <CatalogItem key={fruit._id} {...fruit} />
                ))}
            </div>
            {fruits.length === 0 && <h3>There are no fruits yet.</h3>}
        </section>
    );
}
