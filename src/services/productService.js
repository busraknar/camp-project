import axios from "axios"
export default class ProductService{
    getProducts(){
        return axios.get("http://localhost:47515/api/Products/getall")
    }
    getById(productId){  // SOru işaretinden sonraki kısım
    return axios.get("http://localhost:47515/api/Products/getbyid?productId=" + productId)
}
}


//https://dummyjson.com/products