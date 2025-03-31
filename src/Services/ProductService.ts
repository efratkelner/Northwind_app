import axios, { AxiosRequestConfig } from "axios";
import { ProductModel } from "../Models/ProductModel";
import { appConfig } from "../Utils/AppConfig";
import { productActions, store } from "../Redux/store";

class ProductService {

    public async getAllProducts() {

        // If we have products in global state - return them: 
        if(store.getState().products.length > 0) return store.getState().products;

        // Get products from server: 
        const response = await axios.get<ProductModel[]>(appConfig.productsUrl);
        const products = response.data;

        // Update global state: 
        const action = productActions.initProducts(products); // Create action object.
        store.dispatch(action); // Send it to redux.

        return products; // Returns Promise<ProductModel[]>
    }

    public async getOneProduct(id: number) {

        // If we have that product in global state - return it: 
        const desiredProduct = store.getState().products.find(p => p.id === id);
        if(desiredProduct) return desiredProduct;

        // Get product from server:
        const response = await axios.get<ProductModel>(appConfig.productsUrl + id);
        const product = response.data;
        return product;
    }

    public async addProduct(product: ProductModel) {

        // Send product to server: 
        const options: AxiosRequestConfig = { headers: { "Content-Type": "multipart/form-data" } };
        const response = await axios.post<ProductModel>(appConfig.productsUrl, product, options);
        const dbProduct = response.data;
        
        // Add product to global state: 
        const action = productActions.addProduct(dbProduct);
        store.dispatch(action);
    }

    public async updateProduct(product: ProductModel) {

        // Send product to server: 
        const options: AxiosRequestConfig = { headers: { "Content-Type": "multipart/form-data" } };
        const response = await axios.put<ProductModel>(appConfig.productsUrl + product.id, product, options);
        const dbProduct = response.data;
        
        // Add product to global state: 
        const action = productActions.updateProduct(dbProduct);
        store.dispatch(action);
    }

    public async deleteProduct(id: number) {

        // Send product to server: 
        await axios.delete(appConfig.productsUrl + id);
        
        // Add product to global state: 
        const action = productActions.deleteProduct(id);
        store.dispatch(action);
    }

}

export const productService = new ProductService();
