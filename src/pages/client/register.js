import input from '~/components/input';
import button from '~/components/button';
import { useEffect } from '~/utils';
import { $ } from '~/utils/jquery';
import httpRegister from '~/api/httpRegister';
import { router } from '~/utils';
const Message = (content, error) =>
    `<p class="${error ? 'tw-text-red-500' : 'tw-text-green-700'} tw-text-xs tw-pt-1 tw-pl-1">${content}</p>`;
const register = () => {
    useEffect(() => {
        const userName = $('.userName');
        const password = $('.password');
        const passwordConfirm = $('.passwordConfirm');
        const btnRegister = $('.btn-register');
        const notValidate = (element) => {
            element.nextElementSibling.innerHTML = '';
        };
        const setValue = () => {
            userName.value = '';
            password.value = '';
            passwordConfirm.value = '';
        };
        const validateUseName = () => {
            const value = userName.value;
            const message = userName.nextElementSibling;
            if (!value) message.innerHTML = Message('Vui lòng điền trường này !!', true);
            else if (value.length > 10) message.innerHTML = Message('Không vượt quá 10 ký tự !!', true);
            else if (value.includes(' ')) message.innerHTML = Message('Không có khoảng cách !!', true);
            else if (!isNaN(value)) message.innerHTML = Message('Vui lòng không chỉ nhâp toàn số !!', true);
            else {
                message.innerHTML = Message('Đã điền đúng !!', false);
                return value;
            }
        };
        const validatePassConfirm = () => {
            const value = passwordConfirm.value;
            const message = passwordConfirm.nextElementSibling;
            if (!value) message.innerHTML = Message('Vui lòng điền trường này !!', true);
            else if (value != password.value) message.innerHTML = Message('Mật khẩu không khớp !!', true);
            else {
                message.innerHTML = Message('Đã điền đúng !!', false);
                return value;
            }
        };
        const validatePass = () => {
            const value = password.value;
            const message = password.nextElementSibling;
            if (passwordConfirm.value) validatePassConfirm();
            if (!value) message.innerHTML = Message('Vui lòng điền trường này !!', true);
            else if (value.length < 8) message.innerHTML = Message('Vui lòng nhập từ 8 ký tự  !!', true);
            else {
                message.innerHTML = Message('Đã điền đúng !!', false);
                return value;
            }
        };
        userName.addEventListener('blur', validateUseName);
        password.addEventListener('blur', validatePass);
        passwordConfirm.addEventListener('blur', validatePassConfirm);
        userName.addEventListener('input', (e) => notValidate(e.target));
        password.addEventListener('input', (e) => notValidate(e.target));
        passwordConfirm.addEventListener('input', (e) => notValidate(e.target));
        btnRegister.addEventListener('click', (e) => {
            e.preventDefault();
            const isUserName = validateUseName();
            const isPass = validatePass();
            const isPassConfirm = validatePassConfirm();
            if (isPass && isUserName && isPassConfirm) {
                const data = {
                    user_name: isUserName,
                    password: isPass,
                };
                btnRegister.innerHTML =
                    '<div class="tw-rounded-[50%] tw-border-[12px] tw-border-solid tw-border-x-white tw-border-y-transparent tw-animate-spin"></div>';
                const apiRegister = async () => {
                    const res = await httpRegister(data);
                    if (res.status == 200) {
                        setTimeout(() => {
                            $('.alert').innerHTML = `<div 
                                                        class="tw-flex tw-p-3 tw-items-center tw-bg-green-500 tw-rounded-md tw-text-white tw-gap-2"
                                                    >
                                                        <i class="fa-solid fa-check"></i>
                                                        <p>Tên đăng nhập đã tồn tại</p>
                                                    </div>`;
                            router.navigate('/account/login');
                        }, 3000);
                    } else if (res.response.data.keyPattern.user_name) {
                        setTimeout(() => {
                            setValue();
                            $('.alert').innerHTML = `<div 
                                                        class="tw-flex tw-p-3 tw-items-center tw-bg-red-500 tw-rounded-md tw-text-white tw-gap-2"
                                                    >
                                                        <i class="fa-solid fa-xmark"></i>
                                                        <p>Tên đăng nhập đã tồn tại</p>
                                                    </div>`;
                            location.reload();
                        }, 3000);
                    }
                };
                apiRegister();
            }
        });
    });
    return `<div class="tw-mb-5">
                <div class="tw-absolute tw-top-2 tw-left-1/2 -tw-translate-x-1/2 alert"></div>
                <div>
                    <h2 class="tw-text-2xl tw-font-medium tw-mt-4 tw-text-center">Đăng ký</h2>
                </div>
                <div class="tw-w-3/5 tw-mx-auto tw-mt-7">
                    <form>
                        <div class="tw-my-5">
                            ${input('text', 'Tên đăng nhập', '', 'userName')}
                            <div></div>
                        </div>
                        <div class="tw-my-5">
                            ${input('password', 'Mật khẩu', '', 'password')}
                            <div></div>
                        </div>
                        <div class="tw-my-5">
                            ${input('password', 'Xác nhận mật khẩu', '', 'passwordConfirm')}
                            <div></div>
                        </div>
                        ${button('Đăng ký', 'btn-register')}
                    </form>
                    <div class="tw-flex tw-items-center tw-gap-2 tw-my-4">
                        <div class="tw-border-t tw-border-solid tw-border-[#ccc] tw-flex-1"></div>
                        <p class="tw-text-sm tw-text-gray-400">hoặc</p>
                        <div class="tw-border-t tw-border-solid tw-border-[#ccc] tw-flex-1"></div>
                    </div>
                    <a href='/account/login' data-navigo>${button('Đăng nhập', '', true)}</a>
                </div>
            </div>`;
};

export default register;
