/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"; // Importing Link for navigation
import { getImage } from "../utils/getImage"; // Importing a utility function to fetch images

// The DetailsList component accepts `data` as a prop
function DetailsList({ data }) {
    // Dynamically generating the image path using the provided utility function
    let imgLink = getImage(`../assets/images/${data.image}`);

    return (
        <div>
            {/* Background container with responsive design */}
            <div className="bg-gray-100 dark:bg-gray-800 py-8 col-span-12 h-screen">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        {/* Image section */}
                        <div className="md:flex-1 px-4">
                            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                {/* Product image */}
                                <img
                                    className="w-full h-full object-cover"
                                    src={imgLink}
                                    alt="Product Image"
                                />
                            </div>
                        </div>
                        {/* Details section */}
                        <div className="md:flex-1 px-4">
                            {/* Product title */}
                            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                                {data.title}
                            </h2>
                            {/* Placeholder description */}
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                                ante justo. Integer euismod libero id mauris malesuada tincidunt.
                            </p>
                            {/* Price and availability */}
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">
                                        Price: ${data.price}
                                    </span>
                                </div>
                                <div>
                                    <span className="font-bold text-gray-700 dark:text-gray-300">
                                        Availability:
                                    </span>
                                    <span className="text-gray-600 dark:text-gray-300"> In Stock</span>
                                </div>
                            </div>
                            {/* Size selection */}
                            <div className="mb-4">
                                <span className="font-bold text-gray-700 mb-3 dark:text-gray-300">
                                    Select Size:
                                </span>
                                <div className="flex items-center mt-2">
                                    {/* Size buttons */}
                                    {["S", "M", "L", "XL", "XXL"].map((size) => (
                                        <button
                                            key={size}
                                            className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600"
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            {/* Product description */}
                            <div>
                                <span className="text-lg font-bold text-gray-700 dark:text-gray-300">
                                    Product Description:
                                </span>
                                <p className="text-gray-600 dark:text-gray-300 text-sm mt-3">
                                    {data.description}
                                </p>
                            </div>
                            {/* Buttons: Add to Cart and Home */}
                            <div className="flex -mx-2 mb-4 mt-4">
                                <div className="w-1/2 px-2">
                                    <button className="w-full mb-5 bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                                        Add to Cart
                                    </button>
                                </div>
                                <div className="w-1/2 px-2 mt-2">
                                    {/* Link to navigate back to the home page */}
                                    <Link
                                        to="/"
                                        className="w-full bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-400 dark:hover:bg-gray-600"
                                    >
                                        Home
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsList; // Exporting the DetailsList component
