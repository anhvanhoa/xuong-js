import { POST } from './httpRequest';
import { router } from '~/utils';
import { store, actionAddToken } from '~/store/store';
import httpRefreshToken from './httpRefreshToken';
const uploadProduct = async (data) => {
    const refreshToken = store.getState().user.currentUser.refreshToken;
    const listToken = await httpRefreshToken({ refreshToken });
    store.dispatch(actionAddToken(listToken));
    try {
        const res = await POST('/products/upload-product', data, {
            headers: {
                token: `Bearer ${listToken.accessToken}`,
            },
        });
        router.navigate('/admin/list-product');
        return res;
    } catch (error) {
        alert('Tạo không thành công');
        return error;
    }
};

export default uploadProduct;
