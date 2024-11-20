import { useLoaderData } from "react-router-dom"
import DetailsList from "./DetailsList";

function ProductDetails() {

  const product = useLoaderData()
  console.log(product);

    return (
        <div className="col-span-8">
            {
                product.map(item => <DetailsList key={item.id} data={item} />)
            }
       </div>
    );
}

export default ProductDetails
