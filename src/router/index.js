import home from '~/pages/client/home';
import homeAdmin from '~/pages/admin/home';
import createProduct from '~/pages/admin/createProduct';
import listProduct from '~/pages/admin/listProduct';
import updateProduct from '~/pages/admin/updateProduct';
import login from '~/pages/client/login';
import register from '~/pages/client/register';
import productList from '~/pages/client/productList';
import productDetail from '~/pages/client/productDetail';
import profile from '~/pages/client/profile';
const routersClient = [
    {
        path: '/',
        element: home,
        layout: '',
    },
    {
        path: '/product-list',
        element: productList,
        layout: '',
    },
    {
        path: '/product/:id-:code',
        element: productDetail,
        layout: '',
    },
    {
        path: '/account/profile',
        element: profile,
        layout: '',
    },
    {
        path: '/account/login',
        element: login,
        layout: 'auth',
    },
    {
        path: '/account/register',
        element: register,
        layout: 'auth',
    },
];

const routersAdmin = [
    {
        path: '/admin',
        element: homeAdmin,
        layout: '',
    },
    {
        path: '/admin/create-product',
        element: createProduct,
        layout: '',
    },
    {
        path: '/admin/list-product',
        element: listProduct,
        layout: '',
    },
    {
        path: '/admin/update-product/:id',
        element: updateProduct,
        layout: '',
    },
];

export default routersClient;
export { routersAdmin };
