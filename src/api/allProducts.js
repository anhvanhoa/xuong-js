import { GET } from './httpRequest';
const allProducts = async (queryString = '') => {
    try {
        const data = await GET(`/products?${queryString}`);
        return data;
    } catch (error) {
        return error;
    }
};

export default allProducts;
