import CatalogItem from "./catalogItem";

export default function Catalog({ fruits }) {
    console.log(fruits);
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
