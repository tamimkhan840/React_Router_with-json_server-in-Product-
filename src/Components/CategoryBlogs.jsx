import { useLoaderData } from "react-router-dom";
import ProductItem from "./ProductItem";

export default function ProductList() {


      const products = useLoaderData()
    //   console.log(products);
    return (
        <div className="col-span-9 bg-white p-3">
            <h2 className="text-3xl text-center font-bold mb-5">{products[0].category}</h2>

            <div className="grid grid-cols-12 gap-4">
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
