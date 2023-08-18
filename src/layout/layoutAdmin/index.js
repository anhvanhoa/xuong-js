import sidebar from '~/layout/components/sidebarAdmin';
const layoutAdmin = (children) => {
    return `
    <div>
        <div class="tw-flex tw-max-w-[1440px] tw-m-auto tw-px-4">
        ${sidebar()}
        ${children}
        </div>
    </div>
    `;
};

export default layoutAdmin;
