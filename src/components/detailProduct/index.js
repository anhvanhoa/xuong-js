import generalInformation from '~/components/generalInformation';
const detailProduct = (product = {}) => {
    return `
        <div class="tw-max-w-[1440px] tw-mx-auto tw-px-4 tw-mt-10 tw-gap-16 tw-grid tw-grid-cols-2">
            <div>
                <img 
                    class="tw-h-[550px] tw-w-full tw-object-cover thumbnail"
                    src="${product.thumbnail}" \
                    alt="${product.title}"
                />
                <div class="tw-mt-6 tw-relative">
                    <swiper-container class="mySwiper" space-between="0" slides-per-view="4">
                        <swiper-slide><img id="list-image" class="tw-w-full tw-h-[168px] tw-object-cover" src="${
                            product.thumbnail
                        }"/></swiper-slide>
                        ${product.list_image
                            .map(
                                (element) => `
                                <swiper-slide><img id="list-image" class="tw-w-full tw-h-[168px] tw-object-cover" src="${element}"/></swiper-slide>
                            `,
                            )
                            .join('')}
                    </swiper-container>
                    <button class="tw-absolute -tw-translate-x-1/2 tw-top-[50%] tw-left-4 tw-z-10 ${
                        product.list_image.length <= 3 ? 'tw-hidden' : ''
                    }" id="btn-prev">
                        <i class="tw-text-2xl tw-text-primary fa-solid fa-chevron-left"></i>
                    </button>
                    <button class="tw-absolute -tw-translate-x-1/2 tw-top-[50%] tw-right-4 tw-z-10 ${
                        product.list_image.length <= 3 ? 'tw-hidden' : ''
                    }" id="btn-next">
                        <i class="tw-text-2xl tw-text-primary fa-solid fa-chevron-right"></i>
                    </button>
                </div>
            </div>
            <div>
                <h1 class="tw-text-3xl tw-font-semibold ">TRACK 6 2.BLUES - LOW TOP - BLUEWASH</h1>
                <div class="tw-flex tw-justify-between tw-py-7">
                    <div class="tw-flex tw-items-center tw-gap-1">
                        <p>Mã sản phẩm:</p>
                        <p class="tw-font-semibold">${product.code_product}</p>
                    </div>
                    <div class="tw-flex tw-items-center tw-gap-1">
                        <p>Tình trạng:</p>
                        <p class="tw-font-semibold">${product.status}</p>
                    </div>
                </div>
                <p class="tw-font-semibold tw-text-2xl tw-text-primary">
                ${new Intl.NumberFormat('vi').format(product.price)} VND</p>
                <div class="tw-border-t tw-border-gray-600 tw-border-dashed tw-w-full tw-my-6"></div>
                <div class="tw-flex tw-gap-4">
                    ${product?.color
                        .map(
                            (element) => `
                        <div class="color tw-w-7 tw-h-7 tw-transition-all tw-cursor-pointer" style="background: ${element.code}"></div>
                    `,
                        )
                        .join('')}
                </div>
                ${
                    product.color
                        ? '<div class="tw-border-t tw-border-gray-600 tw-border-dashed tw-w-full tw-my-6"></div>'
                        : ''
                }
                <div class="tw-flex tw-items-center tw-justify-between">
                    <div class="tw-flex tw-items-center tw-gap-5">
                        <p class="tw-text-lg tw-uppercase">Số Lượng</p>
                        <div class="tw-bg-[#ccc]/30 tw-py-1 tw-px-2 tw-rounded-md tw-select-none">
                            <span class="decrease tw-p-1 tw-text-sm hover:tw-bg-[#ccc] hover:tw-text-primary tw-rounded-[50%] tw-cursor-pointer">
                                <i class="fa-solid fa-minus"></i>
                            </span>
                            <span class="tw-p-1 amount">1</span>
                            <span class="increase tw-p-1 tw-text-sm hover:tw-bg-[#ccc] hover:tw-text-primary tw-rounded-[50%] tw-cursor-pointer">
                                <i class="fa-solid fa-plus"></i>
                            </span>
                        </div>
                    </div>
                    <div class="tw-flex tw-items-center tw-gap-5">
                        <p class="tw-text-lg tw-uppercase">Size</p>
                        <select class="tw-bg-[#ccc]/30 tw-py-1 tw-px-4 tw-rounded-md">
                            ${product?.size.map(
                                (element) => `<option class="tw-bg-white" value="${element}">${element}</option>`,
                            )}
                        </select>
                    </div>
                </div>
                <div class="tw-mt-8 tw-flex tw-gap-5">
                    <button class="tw-w-[70%] tw-bg-primary tw-py-4 tw-text-xl tw-text-white tw-font-medium">Mua Ngay</button>
                    <button class="tw-flex-1 tw-bg-black tw-text-white tw-font-medium">Thêm vào giỏ hàng</button>
                </div>
                ${generalInformation(product.info)}
            </div>
        </div>`;
};

export default detailProduct;
