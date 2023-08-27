const products = (dataProducts = []) => {
    return `
    <div class="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-4 tw-gap-5 tw-mt-12">
    ${dataProducts
        .map(
            (product) => `
        <a href="/product/${product._id}-${product.code_product}" data-navigo class="tw-h-full">
            <div class="tw-flex tw-items-center tw-flex-col tw-h-full">
                <img class="tw-w-full tw-object-cover tw-aspect-square" src="${product.thumbnail}" alt="${
                product.title
            }"/>
                <p class="tw-py-3 ">${product.status}</p>
                <div class="tw-border-t tw-border-gray-600 tw-border-dashed tw-w-full"></div>
                <h2 class="tw-font-semibold tw-py-2 tw-text-lg tw-text-center tw-flex-1">${product.title}</h2>
                <p class="tw-font-medium tw-text-primary tw-text-lg">${new Intl.NumberFormat('vi').format(
                    product.price,
                )} VND</p>
            </div>
        </a>
        `,
        )
        .join('')}    
    </div>
    `;
};

export default products;
