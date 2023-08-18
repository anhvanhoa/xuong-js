import input from '~/components/input';
import button from '~/components/button';
import { $ } from '~/utils/jquery';
import { useEffect, router } from '~/utils';
import httpLogin from '~/api/httpLogin';
import validateCreate from '~/components/validateCreate';
const login = () => {
    useEffect(() => {
        const userName = $('.userName');
        const password = $('.password');
        const btnLogin = $('.btn-login');
        let validateBox = $('.validate-login');
        btnLogin.addEventListener('click', (e) => {
            e.preventDefault();
            const data = {
                user_name: userName.value,
                password: password.value,
            };
            const apiLogin = async () => {
                const res = await httpLogin(data, router.navigate);
                if (res.response) {
                    validateBox.insertAdjacentHTML('afterbegin', validateCreate(res.response.data.message, true));
                    setTimeout(() => {
                        validateBox.lastElementChild.remove();
                    }, 2000);
                }
            };
            apiLogin();
        });
    });
    return `
    <div>
        <div class="tw-mb-5">
            <div>
                <h2 class="tw-text-2xl tw-font-medium tw-mt-4 tw-text-center">Đăng nhập</h2>
            </div>
            <div class="tw-w-3/5 tw-mx-auto tw-mt-7">
                <form>
                    <div class="tw-my-5">
                        ${input('text', 'Tên đăng nhập', '', 'userName')}
                        </div>
                        <div class="tw-my-5">
                        ${input('password', 'Mật khẩu', '', 'password')}
                    </div>
                    ${button('Đăng nhập', 'btn-login')}
                </form method="POST">
                <p class="tw-text-center tw-my-3"><a class="tw-text-gray-500 tw-text-sm hover:tw-text-sky-500" href="/quen-mat-khau">Quên mật khẩu?</a></p>
                <div class="tw-flex tw-items-center tw-gap-2">
                    <div class="tw-border-t tw-border-solid tw-border-[#ccc] tw-flex-1"></div>
                    <p class="tw-text-sm tw-text-gray-400">hoặc</p>
                    <div class="tw-border-t tw-border-solid tw-border-[#ccc] tw-flex-1"></div>
                </div>
                <p class="tw-text-center tw-text-sm tw-text-gray-500 tw-my-3">Bạn chưa có tài khoản</p>
                <a href='/account/register' data-navigo>${button('Tạo tài khoản', '', true)}</a>
            </div>
        </div>
        <div class="validate-login tw-fixed tw-top-3 tw-right-3">
    </div>
    `;
};

export default login;
