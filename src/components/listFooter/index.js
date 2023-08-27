const listFooter = (data = []) => {
    return `
        <div class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-4">
            ${data
                .map(
                    (element) => ` 
                            <div>
                                <h4 class="tw-text-lg tw-font-semibold tw-py-3">${element.title}</h4>
                                <ul class="tw-text-[#ccc]">
                                    ${element.children
                                        .map(
                                            (item) => `
                                            <li><a class="hover:tw-text-primary" href="${item.href}">${item.title}</a></li>
                                            `,
                                        )
                                        .join('')}
                                </ul>
                            </div>`,
                )
                .join('')}
        </div>
    `;
};

export default listFooter;
