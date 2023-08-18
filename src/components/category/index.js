const category = (data = []) => {
    return `
            <div class="tw-mx-auto tw-max-w-[1440px] tw-mt-24">
                <h2 class="tw-text-center tw-text-3xl tw-font-semibold tw-pb-10">DANH MỤC MUA HÀNG</h2>
                <div class="tw-grid tw-grid-cols-3 tw-gap-6">
                    ${data
                        .map(
                            (element) => `
                            <div class="tw-relative">
                                <img class="tw-h-[300px] tw-w-full" src="${element.background}"/>
                                <div class="tw-bg-black/50 tw-text-white tw-w-full tw-h-full tw-flex tw-items-center tw-flex-col tw-text-center tw-absolute tw-inset-0">
                                    <h3 class="hover:tw-text-primary tw-text-2xl tw-font-semibold tw-py-5 tw-mt-8"><a href="${
                                        element.href
                                    }">${element.title}</a></h3>
                                    <ul class="tw-text-lg tw-font-medium">
                                        ${element.children
                                            .map(
                                                (item) => `
                                            <li class="hover:tw-text-primary"><a href="${item.href}">${item.title}</a></li>
                                            `,
                                            )
                                            .join('')}
                                    </ul>
                                </div>
                            </div>
                        `,
                        )
                        .join('')}
                </div>
            </div>
    `;
};

export default category;
