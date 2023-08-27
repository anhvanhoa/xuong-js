import { useEffect } from '~/utils';
import { $ } from '~/utils/jquery';
const header = () => {
    const navigates = [
        {
            name: 'Sản phẩm',
            href: '/product-list',
        },
        {
            name: 'Nam',
            href: '/product-list?gender=men',
        },
        {
            name: 'Nữ',
            href: '/product-list?gender=girl',
        },
        {
            name: 'Outfit',
            href: '',
        },
    ];
    useEffect(() => {
        const navigate = $('.navigate');
        navigate.outerHTML = navigates
            .map(
                (element) => `
                <a data-navigo class="tw-group tw-text-lg tw-capitalize tw-font-medium hover:tw-text-[#F15E2D]" href="${element.href}">
                <span class="tw-pr-1">${element.name}</span>
                </a>
                `,
            )
            .join('');
    });
    return `<div class="tw-relative">
        <div class="tw-max-w-[1440px] tw-mx-auto tw-p-4">
            <div class="tw-flex tw-justify-between tw-items-center">
                <div>
                    <a data-navigo href="/"><img class="tw-h-16" src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Logo_Ananas_Header.svg" alt="logo"/></a>
                </div>
                <div class="tw-hidden lg:tw-block">
                    <nav class="tw-gap-8 tw-items-end tw-hidden lg:tw-flex">
                        <div class="navigate"></div>
                        <a href=""><img class="tw-h-12 tw-rounded-md hover:tw-bg-[#F15E2D]/20 tw-p-2" src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/DiscoverYOU.svg"/></a>
                    </nav>
                </div>
                <div class="tw-items-center tw-bg-gray-100 tw-px-2 tw-rounded-md focus-within:tw-border-[#ccc] tw-border tw-border-solid tw-border-transparent tw-flex">
                    <i class="fa-solid fa-magnifying-glass tw-px-2 tw-text-lg tw-text-gray-500"></i>
                    <input 
                        class="tw-outline-0 tw-border tw-border-solid tw-border-transparent tw-w-full tw-py-2 tw-px-1 placeholder:tw-font-light tw-bg-gray-100"
                        type="text"
                        placeholder="Tìm kiếm"
                    />
                </div>
            </div>
            <div class="lg:tw-hidden tw-pt-2">
                <ul class="tw-flex tw-justify-center tw-items-center tw-gap-8">
                    ${navigates
                        .map(
                            (element) => `
                            <li><a data-navigo class="tw-group tw-text-lg tw-capitalize tw-font-medium hover:tw-text-[#F15E2D]" href="${element.href}">${element.name}</a></li>
                            `,
                        )
                        .join('')}
                </ul>
            </div>
        </div>
        <div class="tw-bg-primary tw-py-2 tw-text-sm tw-px-4">
            <p class="tw-text-center tw-text-white tw-font-semibold">BUY 2 GET 10% OFF - ÁP DỤNG VỚI TẤT CẢ BASIC TEE</p>
        </div>
    </div>`;
};

export default header;
