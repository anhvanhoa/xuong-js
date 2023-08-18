const input = (type, placeholder, value, className) => {
    return `<input 
                class="focus:tw-border-[#ccc] tw-outline-0 tw-border tw-border-solid tw-border-transparent tw-w-full tw-py-3 tw-px-2 placeholder:tw-font-light tw-bg-gray-100 tw-rounded-md ${className}"
                type="${type}"
                value="${value}"
                placeholder="${placeholder}"
            />`;
};

export default input;
