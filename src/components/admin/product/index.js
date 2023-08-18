const product = (data) => {
    return `
    <tr>
        <td class="tw-py-3 tw-max-w-xs">${data.title}</td>
        <td class="tw-py-3">
            <img src="${data.thumbnail}" class="tw-w-32 tw-h-20 tw-object-cover tw-rounded-md"/>
        </td>
        <td class="tw-py-3">${data.code_product}</td>
        <td class="tw-py-3">${data.price}</td>
        <td class="tw-py-3">${data.gender}</td>
        <td class="tw-py-3">${data.status}</td>
        <td class="tw-text-blue-500 tw-font-semibold tw-cursor-pointer tw-py-3"><a href="/admin/update-product/${data._id}" data-navigo>Sửa</a></td>
        <td class="tw-text-red-500 tw-font-semibold tw-cursor-pointer tw-py-3 btn-delete" data-id="${data._id}">Xóa</td>
    </tr>
    `;
};

export default product;
