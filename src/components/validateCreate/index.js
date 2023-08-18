const validateCreate = (content = 'Nội dung của bạn', error = false) => {
    return `
    <div>
        <div class="tw-animate-move tw-w-60 tw-py-2 tw-px-3 tw-rounded-md tw-text-white tw-m-3 ${
            error ? 'tw-bg-red-500' : 'tw-bg-green-600'
        }">
            <p class="tw-text-left">
                ${content}
            </p>
        </div>
    </div>`;
};

export default validateCreate;
