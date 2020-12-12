import {
    LOGIN_REQUEST, LOGIN_COMPLETE,
    ERROR,
    SIGNUP_COMPLETE, SIGNUP_REQUEST,
    LOGOUT_COMPLETE, LOGOUT_REQUEST
} from '../Action/authActions';

const authState = {
    isLogin: false,
    user: "",
    loading: false,
    error: ""
}

const authReducer = (state = authState, action) => {

    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, loading: true }

        case LOGIN_COMPLETE:
            return { ...state, loading: false, user: action.payload, isLogin: true }

        case ERROR:
            return { ...state, error: action.payload }

        case SIGNUP_REQUEST:
            return { ...state, loading: true }

        case SIGNUP_COMPLETE:
            return { ...state, loading: false, user: action.payload, isLogin: true }

        case LOGOUT_COMPLETE:
            return { ...state, loading: false, user: "", isLogin: false }
        case LOGOUT_REQUEST:
            return { ...state, loading: true }
        default: return state
    }
}

export default authReducer;