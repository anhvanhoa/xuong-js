import listFooter from '~/components/listFooter';
const footer = () => {
    const dataFooter = [
        {
            title: 'Sản Phẩm',
            children: [
                {
                    title: 'Giày Nam',
                    href: '',
                },
                {
                    title: 'Giày Nữ',
                    href: '',
                },
                {
                    title: 'Thời trang & Phụ kiện',
                    href: '',
                },
                {
                    title: 'Sale-off',
                    href: '',
                },
            ],
        },
        {
            title: 'Về Công Ty',
            children: [
                {
                    title: 'Dứa tuyển dụng',
                    href: '',
                },
                {
                    title: 'Liên hệ nhượng quyền',
                    href: '',
                },
                {
                    title: 'Về Ananas',
                    href: '',
                },
            ],
        },
        {
            title: 'Hỗ Trợ',
            children: [
                {
                    title: 'FAQs',
                    href: '',
                },
                {
                    title: 'Bảo mật thông tin',
                    href: '',
                },
                {
                    title: 'Chính sách chung',
                    href: '',
                },
                {
                    title: 'Tra cứu đơn hàng',
                    href: '',
                },
            ],
        },
        {
            title: 'Liên Hệ',
            children: [
                {
                    title: 'Email góp ý',
                    href: '',
                },
                {
                    title: 'Hotline',
                    href: '',
                },
                {
                    title: '0123 456 789',
                    href: '',
                },
            ],
        },
    ];
    return `<div class="tw-bg-[#4C4C4C] tw-mt-20 tw-text-white">
        <div class="tw-max-w-[1440px] tw-mx-auto tw-py-10 tw-px-4 tw-grid tw-grid-cols-5 tw-gap-12">
            <div class="tw-col-span-1">
                <img src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Store.svg"/>
                <p class="tw-pt-5 tw-text-center">BẠN MUỐN TRỞ THÀNH MỘT PHẦN CỦA NHÀ DỨA?</p>
            </div>
            <div class="tw-col-span-4">
                ${listFooter(dataFooter)}
                <div class="tw-grid tw-grid-cols-4 tw-mt-8 tw-gap-8">
                    <div>
                        <h4 class="tw-text-2xl tw-font-semibold tw-pb-3">ANANAS SOCIAL</h4>
                        <div class="tw-text-3xl tw-flex tw-gap-4 tw-text-[#ccc]">
                            <a href=""><i class="fa-brands fa-square-facebook"></i></a>
                            <a href=""><i class="fa-brands fa-instagram"></i></a>
                            <a href=""><i class="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                    <div>
                        <h4 class="tw-text-2xl tw-font-semibold tw-pb-3">ĐĂNG KÝ NHẬN MAIL</h4>
                        <div class="tw-flex tw-gap-2">
                            <input type="text" class="tw-w-[70%]">
                            <span class="tw-bg-[#303030] tw-px-6 tw-h-10 tw-flex tw-items-center"><i class="fa-solid fa-chevron-right"></i></span>
                        </div>
                    </div>
                    <div class="tw-col-span-2">
                        <img src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Logo_Ananas_Footer.svg"/>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
};

export default footer;
