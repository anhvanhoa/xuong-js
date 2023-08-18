import { PATCH } from './httpRequest';
import { router } from '~/utils';
import { store, actionAddToken } from '~/store/store';
import httpRefreshToken from './httpRefreshToken';
const httpUpdateProduct = async (id, data) => {
    const refreshToken = store.getState().user.currentUser.refreshToken;
    const listToken = await httpRefreshToken({ refreshToken });
    store.dispatch(actionAddToken(listToken));
    try {
        const res = await PATCH(`/products/update-product/${id}`, data, {
            headers: {
                token: `Bearer ${listToken.accessToken}`,
            },
        });
        router.navigate('/admin/list-product');
        return res;
    } catch (error) {
        alert('Cập nhật không thành công');
        return error;
    }
};

export default httpUpdateProduct;
