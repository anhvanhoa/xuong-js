import { router, useEffect } from '~/utils';
import order from '~/components/order';
import { $, $$ } from '~/utils/jquery';
import oneProducts from '~/api/oneProducts';
import detailProduct from '~/components/detailProduct';
const productDetail = ({ data }) => {
    useEffect(() => {
        const id = data.id;
        let amount = 1;
        const setAmount = () => ($('.amount').innerHTML = amount);
        const apiOneProduct = async (id) => {
            const product = await oneProducts(id);
            let productBuy = {
                amount,
                title: product.title,
                thumbnail: product.thumbnail,
                price: product.price,
                color: '',
                size: '',
                code: product.code_product,
                status: product.status,
                total: product.price,
                fullName: '',
                address: '',
                numberPhone: '',
            };
            const increase = () => {
                amount++;
                productBuy.amount++;
                setAmount();
            };
            const decrease = () => {
                if (amount > 1) {
                    amount--;
                    productBuy.amount--;
                    setAmount();
                }
            };
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
                    productBuy.color = element.style.backgroundColor;
                });
            });
            $('.increase').onclick = () => {
                increase();
                productBuy.total = product.price * amount;
            };
            $('.decrease').onclick = () => {
                decrease();
                productBuy.total = product.price * amount;
            };
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
            $('.size').onchange = (e) => {
                productBuy.size = e.target.value;
            };
            $('.btn-buy').onclick = () => {
                if (!productBuy.size) {
                    alert('Bạn chưa chọn size');
                } else if (!productBuy.color) {
                    alert('Bạn chưa chọn màu');
                } else {
                    $('.order').style.display = 'block';
                    $('.payment').innerHTML = order(productBuy);
                    $('[name="full-name"]').oninput = (e) => {
                        productBuy.fullName = e.target.value;
                    };
                    $('[name="number-phone"]').oninput = (e) => {
                        productBuy.numberPhone = e.target.value;
                    };
                    $('[name="address"]').oninput = (e) => {
                        productBuy.address = e.target.value;
                    };
                    $('.btn-order').onclick = () => {
                        if (!$('[name="full-name"]').value) {
                            alert('Vui lòng nhập họ tên !!');
                        } else if (!$('[name="number-phone"]').value) {
                            alert('Vui lòng nhập số điện thoại !!');
                        } else if (!$('[name="address"]').value) {
                            alert('Vui lòng nhập địa chỉ !!');
                        } else {
                            alert('Đặt mua thành công !!');
                        }
                    };
                }
            };
            $('.overlay').onclick = () => {
                $('.order').style.display = 'none';
                $('.payment').innerHTML = '';
            };
        };
        apiOneProduct(id);
    });
    return `
        <div>
            <div class="detail-product"></div>
            <div class="tw-border-t tw-border-black tw-border-dashed tw-max-w-[1440px] tw-mx-auto tw-mt-20">
                <h2 class="tw-py-10 tw-text-center tw-font-semibold tw-text-2xl">SẢN PHẨM LIÊN QUAN</h2>
            </div>
            <div class="tw-h-screen tw-w-full tw-fixed tw-top-0 tw-z-10 tw-hidden order">
                <div class="tw-absolute tw-inset-0 tw-bg-black/40 overlay"></div>
                <div class="tw-absolute tw-top-1/2 -tw-translate-x-1/2 tw-left-1/2 -tw-translate-y-1/2 payment"></div>
            </div>
        </div>`;
};

export default productDetail;
