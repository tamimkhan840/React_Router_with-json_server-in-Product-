import { api } from "../api/api";


async function categoryLoader() {
    const conn = await api.get("/categories");
    return conn.data;


}
async function productsLoader() {
    const conn = await api.get("/products");
    return conn.data;


}
async function AllproductsLoader({params}) {


    const conn = await api.get("/products");
    const upDateData = await conn.data.filter(item => {
        return item.category == params.categoryName
    })
    return upDateData;


}
async function singleProductDetails({ params }) {


    const conn = await api.get("/products");

    const upDatedData = await conn.data.filter(item => {
        return item.title === params.productName ;
    })

    return upDatedData;
}



export {categoryLoader, productsLoader, AllproductsLoader, singleProductDetails};
