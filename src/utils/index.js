import Navigo from 'navigo';
const router = new Navigo('/', { linksSelector: 'a' });
let effects = [];
const useEffect = (cb = () => {}) => {
    effects.push({
        cb,
    });
};

function render(page) {
    const app = document.querySelector('#app');
    app.innerHTML = page();
    effects.forEach((element) => element.cb());
    effects = [];
}

export { render, router, useEffect };
