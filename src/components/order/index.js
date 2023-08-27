const order = (data = {}) => {
    console.log(data.amount);
    return `
    <div>
        <div class="tw-bg-white tw-p-4 tw-px-8 tw-w-[600px]">
            <h3 class="tw-pb-2 tw-text-lg">Thông tin chi tiết</h3>
            <div class="tw-flex tw-gap-5">
                <img class="tw-h-36 tw-w-36" src="${data.thumbnail}">
                <div class="tw-flex-1">
                    <h4 class="tw-text-xl tw-font-medium"3>${data.title}</h4>
                    <p class="tw-flex tw-items-center">Màu: <span class="tw-ml-1 tw-block tw-h-5 tw-w-5 tw-rounded-[50%]" style="background: ${
                        data.color
                    }"></span></p>
                    <p>size: ${data.size}</p>
                    <p class="tw-text-primary tw-font-medium tw-text-lg">${new Intl.NumberFormat('vi').format(
                        data.price,
                    )}đ</p>
                </div>
                <p>x ${data.amount}</p>
            </div>
            <div class="tw-mt-5">
                <div class="tw-flex tw-items-center tw-gap-2 tw-mt-2 tw-border-b tw-border-dashed tw-border-[#ccc] tw-py-2">
                    <p class="tw-w-[20%]">Họ & Tên: </p>
                    <span><input class="tw-flex-1 tw-pl-2 tw-py-1" type="text" placeholder="Nhập họ & tên" value="${
                        data.fullName
                    }" name="full-name"/></span>
                </div>
                <div class="tw-flex tw-items-center tw-gap-2 tw-mt-2 tw-border-b tw-border-dashed tw-border-[#ccc] tw-py-2">
                    <p class="tw-w-[20%]">Số điện thoại: </p>
                    <span><input class="tw-flex-1 tw-pl-2 tw-py-1" type="text" placeholder="Nhập điện thoại" value="${
                        data.numberPhone
                    }" name="number-phone"/></span>
                </div>
                <div class="tw-flex tw-items-center tw-gap-2 tw-mt-2 tw-border-b tw-border-dashed tw-border-[#ccc] tw-py-2">
                    <p class="tw-w-[20%]">Địa chỉ: </p>
                    <span><input class="tw-flex-1 tw-pl-2 tw-py-1" type="text" placeholder="Nhập địa chỉ" value="${
                        data.address
                    }" name="address"/></span>
                </div>
                <div class="tw-flex tw-items-center tw-gap-2 tw-mt-2 tw-border-b tw-border-dashed tw-border-[#ccc] tw-py-2">
                    <p class="tw-w-[20%]">Tổng tiền: </p>
                    <span class="tw-text-primary tw-flex-1">${new Intl.NumberFormat('vi').format(data.total)}đ</span>
                </div>
            </div>
            <button class="tw-bg-primary tw-mt-5 tw-p-3 tw-text-white btn-order">
                Xác nhận đặt hàng
            </button>
        </div>
    </div>`;
};

export default order;
