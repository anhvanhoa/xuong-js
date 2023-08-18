import createStore from './createStore';

const initState = {
    user: {
        account: false,
        currentUser: null,
    },
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: {
                    ...action.payload,
                },
            };
        case 'GET_LOCAL':
            return {
                ...state,
                user: {
                    ...action.payload,
                },
            };
        case 'SAVE_LOCAL': {
            localStorage.setItem('current', JSON.stringify(state));
            return state;
        }
        case 'LOGOUT': {
            localStorage.removeItem('current');
            return {
                ...state,
                user: {
                    ...action.payload,
                },
            };
        }
        case 'ADD_TOKEN': {
            return {
                ...state,
                user: {
                    account: true,
                    currentUser: {
                        ...state.user.currentUser,
                        ...action.payload,
                    },
                },
            };
        }
        default:
            return state;
    }
};

const actionGetLocal = function (payload) {
    return {
        type: 'GET_LOCAL',
        payload,
    };
};
const actionLogin = function (payload) {
    return {
        type: 'LOGIN',
        payload,
    };
};
const actionLogout = function (payload) {
    return {
        type: 'LOGOUT',
        payload,
    };
};
const actionSaveLocal = function () {
    return {
        type: 'SAVE_LOCAL',
    };
};
const actionAddToken = function (payload) {
    return {
        type: 'ADD_TOKEN',
        payload,
    };
};

const store = createStore(reducer);

export { actionLogin, store, actionSaveLocal, actionGetLocal, actionAddToken, actionLogout };
