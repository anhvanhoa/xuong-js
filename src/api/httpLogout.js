import { POST } from './httpRequest';
import { store, actionLogout } from '~/store/store';
import httpRefreshToken from './httpRefreshToken';
const httpLogout = async () => {
    try {
        const refreshToken = store.getState().user.currentUser.refreshToken;
        const listToken = await httpRefreshToken({ refreshToken });
        const user = await POST(
            '/account/logout',
            { refreshToken: listToken.refreshToken },
            {
                headers: {
                    token: `Bearer ${listToken.accessToken}`,
                },
            },
        );
        if (user.status == 200) {
            store.dispatch(
                actionLogout({
                    account: false,
                    currentUser: null,
                }),
            );
            location.href = '/';
        }
        return user;
    } catch (error) {
        return error;
    }
};

export default httpLogout;
