import introProduct from '~/components/introProduct';
import category from '~/components/category';
const home = () => {
    const dataIntro = [
        {
            title: 'All Black In Black',
            description:
                'Mặc dù được ứng dụng rất nhiều, nhưng sắc đen lúc nào cũng toát lên một vẻ huyền bí không nhàm chán',
            thumbnail: 'https://ananas.vn/wp-content/uploads/banner-phu%CC%A3_2m-600x320.jpg',
            href: '',
        },
        {
            title: 'OUTLET SALE',
            description:
                'Danh mục những  sản phẩm bán tại "giá tốt hơn" chỉ được bán kênh online - Online Only, chúng đã từng làm mưa làm gió một thời gian và hiện đang rơi vào tình trạng bể size, bể số.',
            thumbnail: 'https://ananas.vn/wp-content/uploads/Banner_Sale-off-1.jpg',
            href: '',
        },
    ];
    const dataCategory = [
        {
            id: 1,
            title: 'Giày Nam',
            href: '',
            background: 'https://ananas.vn/wp-content/uploads/catalogy-1.jpg',
            children: [
                {
                    title: 'New Arrivals',
                    href: '',
                },
                {
                    title: 'Best Seller',
                    href: '',
                },
                {
                    title: 'Sale-off',
                    href: '',
                },
            ],
        },
        {
            id: 2,
            title: 'Giày Nữ',
            href: '',
            background: 'https://ananas.vn/wp-content/uploads/catalogy-2.jpg',
            children: [
                {
                    title: 'New Arrivals',
                    href: '',
                },
                {
                    title: 'Best Seller',
                    href: '',
                },
                {
                    title: 'Sale-off',
                    href: '',
                },
            ],
        },
        {
            id: 3,
            title: 'Dòng Sản Phẩm',
            href: '',
            background: 'https://ananas.vn/wp-content/uploads/catalogy-3.jpg',
            children: [
                {
                    title: 'Basas',
                    href: '',
                },
                {
                    title: 'Vintas',
                    href: '',
                },
                {
                    title: 'Urbas',
                    href: '',
                },
                {
                    title: 'Pattas',
                    href: '',
                },
            ],
        },
    ];
    return `<div class="">
                <div>
                    <swiper-container class="mySwiper" pagination="true">
                        <swiper-slide>
                            <img class="tw-object-cover tw-w-full" src="https://ananas.vn/wp-content/uploads/Web1920-1.jpeg" alt=""/>
                        </swiper-slide>
                        <swiper-slide>
                            <img class="tw-object-cover tw-w-full" src="https://ananas.vn/wp-content/uploads/Hi-im-Mule_1920x1050-Desktop.jpg" alt=""/>
                        </swiper-slide>
                    </swiper-container>
                </div>
                <div>
                    ${introProduct(dataIntro)}
                </div>
                <div>${category(dataCategory)}</div>
                <div class="tw-mt-24">
                    <img src="https://ananas.vn/wp-content/uploads/Banner_Clothing.jpg"/>
                </div>
            </div>`;
};

export default home;
