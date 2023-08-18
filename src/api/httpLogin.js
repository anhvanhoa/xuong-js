import { POST } from './httpRequest';
import { store, actionLogin, actionSaveLocal } from '~/store/store';
const httpLogin = async (data, navigate) => {
    try {
        const user = await POST('/account/login', data);
        if (user.status == 200) {
            store.dispatch(
                actionLogin({
                    account: true,
                    currentUser: user.data,
                }),
            );
            store.dispatch(actionSaveLocal());
            navigate('/');
        }
        return user;
    } catch (error) {
        store.dispatch(
            actionLogin({
                account: false,
            }),
        );
        return error;
    }
};

export default httpLogin;
