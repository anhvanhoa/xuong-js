import { POST } from './httpRequest';
const httpRegister = async (data) => {
    try {
        return await POST('/account/register', data);
    } catch (error) {
        return error;
    }
};

export default httpRegister;
