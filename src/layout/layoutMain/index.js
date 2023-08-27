import header from '~/layout/components/header';
import footer from '~/layout/components/footer';
import { store } from '~/store/store';
import { useEffect } from '~/utils';
import { $ } from '~/utils/jquery';
import httpLogout from '~/api/httpLogout';
function layoutMain(children) {
    useEffect(() => {
        const btnLogout = $('#btn-logout');
        const apiLogout = async () => {
            await httpLogout();
        };
        if (btnLogout) {
            btnLogout.addEventListener('click', () => {
                apiLogout();
            });
        }
    });
    return `
    <div class="">
        ${
            store.getState().user.account
                ? `
                <div class="tw-bg-[#303030] tw-text-white tw-relative">
                    <div class="tw-max-w-[1440px] tw-mx-auto tw-py-1 tw-px-4 tw-flex tw-justify-end tw-gap-6">
                    <a class="hover:tw-text-primary" href="">Giỏ hàng <span class="tw-text-sm">(0)</span></a>
                    <div class="tw-group">
                        <p class="hover:tw-text-primary tw-cursor-pointer">Tài khoản</p>
                        <div 
                            class="group-hover:tw-block tw-hidden tw-absolute tw-top-full tw-z-10 tw-text-black tw-shadow-md tw-shadow-black/20 tw-py-3 tw-px-5 tw-right-3 tw-bg-white before:tw-content-[''] before:tw-w-full before:tw-h-4 before:tw-left-0 before:tw-absolute before:tw-bottom-[80%]"
                        >
                            <button class="tw-bg-red-600 tw-text-white tw-px-3 tw-py-1 tw-rounded-md" id="btn-logout">Đăng xuất</button>
                        </div>
                    </div>
                    </div>
                </div>
                `
                : `<div class="tw-sticky tw-top-0 tw-flex tw-items-center tw-justify-center tw-w-full tw-py-3 tw-bg-[#303030] tw-border-b tw-border-[#ccc] tw-border-solid tw-z-50 tw-gap-7">
                    <a class="tw-bg-primary tw-text-white tw-py-2 tw-px-4 tw-rounded-md" href="account/login" >Đăng Nhập</a>
                    <a class="tw-border tw-border-solid tw-border-primary tw-text-primary tw-py-2 tw-px-4 tw-rounded-md" href="account/register" >Đăng Ký</a>
                </div>`
        }
        ${header()}
        ${children}
        ${footer()}
    </div>
    `;
}

export default layoutMain;
