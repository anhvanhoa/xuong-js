import { DELETE } from './httpRequest';
import { store, actionAddToken } from '~/store/store';
import httpRefreshToken from './httpRefreshToken';
const deleteProduct = async (id) => {
    const refreshToken = store.getState().user.currentUser.refreshToken;
    const listToken = await httpRefreshToken({ refreshToken });
    store.dispatch(actionAddToken(listToken));
    try {
        const res = await DELETE(`/products/delete-product/${id}`, {
            headers: {
                token: `Bearer ${listToken.accessToken}`,
            },
        });
        location.reload();
        return res;
    } catch (error) {
        alert('Cập nhật không thành công');
        return error;
    }
};

export default deleteProduct;
