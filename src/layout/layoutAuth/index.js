import headerAuth from '~/layout/components/headerAuth';
function layoutAuth(children) {
    return `
    <div>
        <div class="tw-min-h-screen tw-w-full tw-bg-cover tw-bg-[url(https://ananas.vn/wp-content/uploads/Web1920-1.jpeg)] tw-relative">
            <div class="tw-backdrop-blur-sm tw-absolute tw-inset-0 tw-bg-white/10"></div>
            <div class="tw-relative tw-z-10">
            <div class="tw-max-w-[1440px] tw-mx-auto tw-relative tw-h-screen">
            <div class="tw-w-[500px] tw-bg-white tw-rounded-xl tw-px-4 tw-py-10 tw-absolute tw-top-1/2 tw-left-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2">
                <div>
                    <h1><a href="/" data-navigo><img src="https://ananas.vn/wp-content/themes/ananas/fe-assets/images/svg/Logo_Ananas_Header.svg" alt="logo" class="tw-mx-auto tw-h-16"/></a></h1>
                </div>
                ${children}
            </div>
        </div>
            </div>
        </div>
    </div>
    `;
}

export default layoutAuth;
