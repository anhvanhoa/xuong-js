import products from '~/components/products';
import allProducts from '~/api/allProducts';
import { $ } from '~/utils/jquery';
import filter from '~/components/filter';
import { useEffect, router } from '~/utils';

const productList = ({ queryString }) => {
    useEffect(() => {
        const apiAllProducts = async () => {
            try {
                const resProducts = await allProducts(queryString);
                $('.list-product').outerHTML = products(resProducts);
                router.updatePageLinks();
            } catch (error) {
                console.log(error);
            }
        };
        apiAllProducts();
    });
    return `
        <div>
            <div class="tw-max-w-[1440px] tw-mx-auto tw-grid tw-grid-cols-12 tw-px-4 tw-mt-10 tw-gap-3">
                <div class="tw-col-span-2 tw-hidden xl:tw-block">
                    ${filter()}
                </div>
                <div class="tw-col-span-12 xl:tw-col-span-10">
                    <div>
                        <div class="tw-bg-center tw-bg-[url(https://ananas.vn/wp-content/uploads/desktop_productlist.jpg)] tw-h-[230px] sm:tw-h-[260px] md:tw-h-[320px] lg:tw-h-[400px] tw-bg-no-repeat tw-bg-cover tw-w-full">
                        </div>
                    </div>
                    <div class="list-product">
                    </div>
                </div>
            </div>
        </div>`;
};

export default productList;
