const button = (name, className, border, iconLeft = '', iconRight = '') => {
    return `${
        !border
            ? `<button
                    class="tw-w-full tw-bg-[#006DE5] hover:tw-bg-[#006DE5]/80 tw-text-white tw-rounded-md tw-py-3 tw-font-medium tw-flex tw-justify-center ${className}"
                >
                    ${iconLeft}
                    <span class="tw-px-2">${name}</span>
                    ${iconRight}
                </button>`
            : `<button
                    class="tw-shadow-md tw-w-full tw-border hover:tw-border-[#006DE5] tw-border-[#ccc] tw-border-solid hover:tw-text-[#006DE5] tw-text-gray-500 tw-rounded-md tw-py-2 tw-font-medium ${className}"
                >
                ${iconLeft}
                <span class="tw-px-2">${name}</span>
                ${iconRight}
                </button>`
    }`;
};

export default button;
