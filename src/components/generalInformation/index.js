const generalInformation = (data) => {
    return ` 
    <div class="tw-mt-14">
        <div class="tw-group tw-mt-6 info tw-border-b tw-border-black tw-border-dashed tw-py-3 tw-cursor-pointer">
            <h3 class="tw-text-lg">
                <span class="tw-pr-2">THÔNG TIN SẢN PHẨM</span>
                <span><i class="fa-solid fa-chevron-down"></i></span>
            </h3>
            <div class="group-[.isActive]:tw-block tw-hidden tw-mt-6">
                <p>
                ${data}
                </p>
                <img src="https://ananas.vn/wp-content/uploads/Ananas_SizeChart.jpg" alt="size"/>
            </div>
        </div>
        <div class="tw-group tw-mt-6 info tw-border-b tw-border-black tw-border-dashed tw-py-3 tw-cursor-pointer">
            <h3 class="tw-text-lg">
                <span class="tw-pr-2">QUY ĐỊNH ĐỔI SẢN PHẨM</span>
                <span><i class="fa-solid fa-chevron-down"></i></span>
            </h3>
            <div class="group-[.isActive]:tw-block tw-hidden tw-mt-6">
                <p>
                    💕 Chỉ đổi hàng 1 lần duy nhất, mong bạn cân nhắc kĩ trước khi quyết định.
                </p>
                <p>
                    💕 Thời hạn đổi sản phẩm khi mua trực tiếp tại cửa hàng là 07 ngày, kể từ ngày mua. Đổi sản phẩm khi mua online là 14 ngày, kể từ ngày nhận hàng.
                </p>
                <p>
                    💕 Sản phẩm đổi phải kèm hóa đơn. Bắt buộc phải còn nguyên tem, hộp, nhãn mác.
                </p>
                <p>
                    💕 Sản phẩm đổi không có dấu hiệu đã qua sử dụng, không giặt tẩy, bám bẩn, biến dạng.
                </p>
                <p>
                    💕 Ananas chỉ ưu tiên hỗ trợ đổi size. Trong trường hợp sản phẩm hết size cần đổi, bạn có thể đổi sang 01 sản phẩm khác:
                    <p>- Nếu sản phẩm muốn đổi ngang giá trị hoặc có giá trị cao hơn, bạn sẽ cần bù khoảng chênh lệch tại thời điểm đổi (nếu có).</p>
                    <p>- Nếu bạn mong muốn đổi sản phẩm có giá trị thấp hơn, chúng tôi sẽ không hoàn lại tiền.</p>
                </p>
                <p>
                    💕 Trong trường hợp sản phẩm - size bạn muốn đổi không còn hàng trong hệ thống. Vui lòng chọn sản phẩm khác.
                </p>
                <p>
                    💕 Không hoàn trả bằng tiền mặt dù bất cứ trong trường hợp nào. Mong bạn thông cảm.
                </p>
            </div>
        </div>
        <div class="tw-group tw-mt-6 info tw-border-b tw-border-black tw-border-dashed tw-py-3 tw-cursor-pointer">
            <h3 class="tw-text-lg">
                <span class="tw-pr-2">BẢO HÀNH THẾ NÀO ?</span>
                <span><i class="fa-solid fa-chevron-down"></i></span>
            </h3>
            <div class="group-[.isActive]:tw-block tw-hidden tw-mt-6">
                <p>
                    Mỗi đôi giày Ananas trước khi xuất xưởng đều trải qua nhiều khâu kiểm tra. Tuy vậy, trong quá trình sử dụng, nếu nhận thấy các lỗi: gãy đế, hở đế, đứt chỉ may,...trong thời gian 6 tháng từ ngày mua hàng, mong bạn sớm gửi sản phẩm về Ananas nhằm giúp chúng tôi có cơ hội phục vụ bạn tốt hơn. Vui lòng gửi sản phẩm về bất kỳ cửa hàng Ananas nào, hoặc gửi đến trung tâm bảo hành Ananas ngay trong trung tâm TP.HCM trong giờ hành chính:
                    <p>Địa chỉ: 5C Tân Cảng, P.25, Q.Bình Thạnh , TP. Hồ Chí Minh.</p>
                    <p>Hotline: 028 2211 0067</p>
                </p>
            </div>
        </div>
    </div>`;
};

export default generalInformation;
