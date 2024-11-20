/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { getImage } from "../utils/getImage";

export default function ProductItem({ product }) {
    let imgLink = getImage(`../assets/images/${product.image}`);

    return (
        <div className= "col-span-12 shadow border rounded overflow-hidden  md:col-span-6 lg:col-span-4">
            <img
                src={imgLink}
                alt={product.title}
                className="w-full h-48 object-cover sm:h-36"
            />
            <div className="p-3">
                <h4 className="text-2xl sm:text-xl font-semibold">
                    {product.title}
                </h4>
                <p className="text-slate-400 text-sm sm:text-xs">
                    {product.category}
                </p>
                <div className="flex justify-between items-center mt-3">
                    <span className="text-xl font-semibold sm:text-lg">
                        ${product.price}
                    </span>
                    <span className="text-yellow-500 text-sm sm:text-xs">
                        {product.ratting}
                    </span>
                </div>
            </div>

            <Link
                to={`/CategoryBlogs/${product.category}/${product.title}`}
                className="block bg-green-600 text-white text-center text-xl font-semibold py-3 sm:py-2 sm:text-lg"
            >
                Read More
            </Link>
        </div>
    );
}
