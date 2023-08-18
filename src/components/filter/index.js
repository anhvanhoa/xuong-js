const filter = () => {
    const dataFilter = [
        {
            name: 'Trạng Thái',
            children: ['Limited Edition', 'Online Only', 'Sale Off', 'New Arrivals'],
        },
        {
            name: 'Giá',
            children: ['Dưới 300k', '400k - 500k', '500k - 800k', 'Trên 1 triệu'],
        },
        {
            name: 'Loại Sản Phẩm',
            children: ['GIầy', 'Áo', 'Quần', 'Vớ'],
        },
    ];
    return `
    <div>
        <div class="tw-gap-8 tw-hidden">
            <p><a data-navigo class="hover:tw-text-primary tw-text-xl tw-font-semibold tw-uppercase" href="/product-list">Tất Cả</a></p>
            <p><a data-navigo class="hover:tw-text-primary tw-text-xl tw-font-semibold tw-uppercase tw-relative before:tw-content-normal before:tw-absolute before:tw-top-0 before:-tw-left-4 before:tw-w-[1px] before:tw-h-full before:tw-bg-[#ccc] after:tw-content-normal after:tw-absolute after:tw-top-0 after:-tw-right-4 after:tw-w-[1px] after:tw-h-full after:tw-bg-[#ccc]" href="/product-list?gender=men">Nam</a></p>
            <p><a data-navigo class="hover:tw-text-primary tw-text-xl tw-font-semibold tw-uppercase" href="/product-list?gender=girl">Nữ</a></p>
        </div>
        <h3 class="tw-text-xl tw-font-semibold">Bộ lọc sản phẩm</h3>
        ${dataFilter
            .map(
                (item) => `
            <div class="tw-border-t tw-border-black tw-border-solid tw-pt-5 tw-mt-5">
                <h4 class="tw-text-primary tw-text-xl tw-font-medium">${item.name}</h4>
                <ul class="tw-pl-3 tw-pt-2">
                ${item.children.map((element) => `<li class="tw-py-1">${element}</li>`).join('')}
                </ul>
            </div>
            `,
            )
            .join('')}
    </div>`;
};

export default filter;
