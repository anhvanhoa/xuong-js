import '~/components/styleGlobal/style.scss';
import { register } from 'swiper/element/bundle';
import { render, router } from './utils';
import { store, actionGetLocal } from './store/store';
import routersClient, { routersAdmin } from '~/router';
import layoutMain from '~/layout/layoutMain';
import layoutAdmin from '~/layout/layoutAdmin';
import layoutAuth from '~/layout/layoutAuth';
register();
const isLocal = JSON.parse(localStorage.getItem('current'));
if (isLocal) {
    store.dispatch(actionGetLocal(isLocal.user));
}
// Định nghĩa cái route
routersClient.map((route) => {
    if (route.layout === '') {
        router.on(route.path, ({ data, params, queryString }) => {
            render(() => layoutMain(route.element({ data, params, queryString })));
        });
    } else if (route.layout === 'auth') {
        router.on(route.path, ({ data, params, queryString }) => {
            if (!isLocal?.user?.currentUser) {
                render(() => layoutAuth(route.element({ data, params, queryString })));
            } else {
                router.navigate('/');
            }
        });
    }
});

routersAdmin.map((route) => {
    router.on(route.path, ({ data, params, queryString }) => {
        if (isLocal?.user.account) {
            if (!isLocal.user.currentUser.admin) {
                alert('Bạn không thể truy cập vào đây');
                router.navigate('/');
            } else {
                render(() => layoutAdmin(route.element({ data, params, queryString })));
            }
        } else {
            router.navigate('/account/login');
        }
    });
});

router.notFound(() => {
    render(() => layoutMain('not found'));
});

// start navigo
router.resolve();
