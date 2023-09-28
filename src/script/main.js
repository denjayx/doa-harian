import '../components/product-list';
import axios from 'axios';
import { BASE_URL } from '../utils/constanta';

const main = () => {
    const productListElement = document.querySelector('product-list');
    const getProducts = async () => {
        try {
            const response = await axios.get(BASE_URL, 'Access-Control-Allow-Origin: *');
            const data = await response.data.products;
            if (!response.status) {
                alert('Gagal memuat data');
            } else {
                renderProducts(data);
            }
        } catch (error) {
            alert(error);
        }
    };

    const renderProducts = (data) => {
        productListElement.products = data;
    };

    getProducts();
};

export default main;
