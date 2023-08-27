const introProduct = (data = []) => {
    return `
            <div class="tw-mx-auto tw-max-w-[1440px] tw-mt-12 tw-px-4 lg:tw-mt-20">
                <div class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-10 lg:tw-gap-14 xl:tw-gap-20">
                ${data
                    .map(
                        (element) => `
                    <a href="${element.href}">
                        <img class="tw-w-full sm:tw-h-[230px] lg:tw-h-[300px] xl:tw-h-[350px] tw-object-cover" src="${element.thumbnail}" alt=""/>
                        <h2 class="tw-text-2xl tw-font-semibold tw-pt-6 tw-uppercase">${element.title}</h2>
                        <p class="tw-pt-2 tw-text-sm">${element.description}</p>
                    </a>
                    `,
                    )
                    .join('')}
                </div>
            </div>
    `;
};

export default introProduct;
