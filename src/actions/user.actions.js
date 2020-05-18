import userConstants from './constants'

export const userActinos = {
    login
}

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/')
                }
            )
    }

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user }}
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user }}
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, user }}
}