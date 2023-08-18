import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'https://xuong-js.onrender.com/api',
});

const GET = async (url, options = {}) => {
    try {
        const res = await httpRequest.get(url, options);
        return res.data;
    } catch (error) {
        return error;
    }
};
const POST = async (url, data, options = {}) => {
    try {
        const res = await httpRequest.post(url, data, options, { withCredentials: true });
        return res.data;
    } catch (error) {
        return error;
    }
};
const PATCH = async (url, data, options = {}) => {
    try {
        const res = await httpRequest.patch(url, data, options, { withCredentials: true });
        return res.data;
    } catch (error) {
        return error;
    }
};

const DELETE = async (url, options) => {
    try {
        const res = await httpRequest.delete(url, options);
        return res.data;
    } catch (error) {
        return error;
    }
};

export default httpRequest;
export { GET, POST, PATCH, DELETE };
