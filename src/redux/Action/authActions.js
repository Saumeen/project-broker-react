import Axios from 'axios';

const BASE_URL = "https://project-broker.herokuapp.com/api"

export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_COMPLETE = "LOGIN_COMPLETE"
export const ERROR = "LOGIN_ERROR"
export const SIGNUP_REQUEST = "SIGNUP_REQUEST"
export const SIGNUP_COMPLETE = "SIGNUP_COMPLETE"
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_COMPLETE = "LOGOUT_COMPLETE";



export const loginReqest = () => {
    return { type: LOGIN_REQUEST }
};

export const loginComplete = user => {
    return {
        type: LOGIN_COMPLETE,
        payload: user
    }
};

export const error = err => {
    return {
        type: ERROR,
        payload: error
    }
};


export const signupRequest = () => {
    return {
        type: SIGNUP_REQUEST
    }
};

export const signupComplete = user => {
    return {
        type: SIGNUP_COMPLETE,
        payload: user
    }
};



export const logoutReqest = () => {
    return {
        type: LOGOUT_REQUEST

    }
};
export const logoutComplete = () => {
    return {
        type: LOGOUT_COMPLETE
    }
};



export const loginUser = (cred) => {
    return (dispatch) => {
        dispatch(loginReqest())
        Axios.post(`${BASE_URL}/auth/login`, cred)
            .then((response) => {
                const res = response.data.data.response;
                if (res.exits) {
                    dispatch(loginComplete(res.username))
                }
                else {
                    dispatch(error("Not Exits !!"))
                }
                console.log(res);

            })
            .catch((err) => {
                console.log(err);
                dispatch(error(err))
            });
    }
}

export const signupUser = (cred) => {
    return (dispatch) => {
        dispatch(signupRequest())
        Axios.post(`${BASE_URL}/auth/addUser`, cred)
            .then((response) => {
                const res = response.data.success;
                console.log(response.data.data.response)
                if (res) {
                    dispatch(signupComplete(response.data.data.response))
                } else {
                    dispatch(error(res))
                }
            })
            .catch((err) => {
                console.log(error);
                dispatch(error(err))

            });
    }
}

export const logoutUser = () => {
    return (dispatch) => {
        dispatch(logoutReqest())
        dispatch(logoutComplete())

    }
}


