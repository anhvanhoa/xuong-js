const introProduct = (data = []) => {
    return `
            <div class="tw-mx-auto tw-max-w-[1440px] tw-mt-20">
                <div class="tw-grid tw-grid-cols-2 tw-gap-20">
                ${data
                    .map(
                        (element) => `
                    <a href="${element.href}">
                        <img class="tw-w-full tw-h-[370px] tw-object-cover" src="${element.thumbnail}" alt=""/>
                        <h2 class="tw-text-3xl tw-font-semibold tw-pt-6 tw-uppercase">${element.title}</h2>
                        <p class="tw-pt-2">${element.description}</p>
                    </a>
                    `,
                    )
                    .join('')}
                </div>
            </div>
    `;
};

export default introProduct;
