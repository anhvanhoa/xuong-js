import { POST } from './httpRequest';
const refreshToken = async (data) => {
    try {
        const res = await POST('/account/refresh-token', data);
        return res;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export default refreshToken;
