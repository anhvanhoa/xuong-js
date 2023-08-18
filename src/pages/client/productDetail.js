import { router, useEffect } from '~/utils';
import { $, $$ } from '~/utils/jquery';
import oneProducts from '~/api/oneProducts';
import detailProduct from '~/components/detailProduct';
const productDetail = ({ data, params, queryString }) => {
    useEffect(() => {
        const id = data.id;
        let amount = 1;
        const increase = () => {
            amount++;
            setAmount();
        };
        const decrease = () => {
            if (amount > 1) {
                amount--;
                setAmount();
            }
        };
        const setAmount = () => ($('.amount').innerHTML = amount);
        const apiOneProduct = async (id) => {
            const product = await oneProducts(id);
            $('.detail-product').outerHTML = detailProduct(product);
            const swiperEl = $('swiper-container');
            $('#btn-prev').onclick = () => swiperEl.swiper.slidePrev();
            $('#btn-next').onclick = () => swiperEl.swiper.slideNext();
            $$('.color').forEach((element) => {
                element.addEventListener('click', () => {
                    const isColorActive = element.classList.contains('colorActive');
                    if (isColorActive) {
                        element.classList.toggle('-tw-translate-y-2');
                        element.classList.toggle('tw-rounded-[50%]');
                        return;
                    }

                    if ($('.colorActive')) {
                        $('.colorActive').classList.remove('-tw-translate-y-2');
                        $('.colorActive').classList.remove('tw-rounded-[50%]');
                        $('.colorActive').classList.remove('colorActive');
                    }
                    element.classList.toggle('-tw-translate-y-2');
                    element.classList.toggle('tw-rounded-[50%]');
                    element.classList.add('colorActive');
                });
            });
            $('.increase').onclick = increase;
            $('.decrease').onclick = decrease;
            $$('.info').forEach((element) => {
                const firstElement = element.firstElementChild.classList;
                element.addEventListener('click', () => {
                    const isActive = element.classList.contains('isActive');
                    if (isActive) {
                        element.classList.remove('isActive');
                        firstElement.remove('tw-text-primary');
                        firstElement.remove('tw-font-semibold');
                        return;
                    }
                    if ($('.isActive')) {
                        $('.isActive').firstElementChild.classList.remove('tw-text-primary');
                        $('.isActive').firstElementChild.classList.remove('tw-font-semibold');
                        $('.isActive').classList.remove('isActive');
                    }
                    element.classList.toggle('isActive');
                    firstElement.toggle('tw-text-primary');
                    firstElement.toggle('tw-font-semibold');
                });
            });
            $$('#list-image').forEach((element) => {
                element.onclick = () => ($('.thumbnail').src = element.src);
            });
        };
        apiOneProduct(id);
    });
    return `
        <div>
            <div class="detail-product"></div>
            <div class="tw-border-t tw-border-black tw-border-dashed tw-max-w-[1440px] tw-mx-auto tw-mt-20">
                <h2 class="tw-py-10 tw-text-center tw-font-semibold tw-text-2xl">SẢN PHẨM LIÊN QUAN</h2>
            </div>
        </div>`;
};

export default productDetail;
