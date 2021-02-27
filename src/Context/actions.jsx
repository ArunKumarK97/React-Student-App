import { ROOT_URL } from 'variables/Variables';

export async function loginUser(dispatch, loginPayload) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    try {
        dispatch({ type: 'REQUEST_LOGIN' });
        let response = await fetch(`${ROOT_URL}/login`, requestOptions); //login api
        let data = await response.json();
        if (data.user) {
            if (data.user.email === loginPayload.email && data.user.password === loginPayload.password) {
                dispatch({ type: 'LOGIN_SUCCESS', payload: data });
                localStorage.setItem('currentUser', JSON.stringify(data));
                return data;
            }
        }
        data.error = "Invalid Username/Password";
        dispatch({ type: 'LOGIN_ERROR', error: data.error });
        alert(data.error);
        return;
    } catch (error) {
        dispatch({ type: 'LOGIN_ERROR', error: error });
        console.log(error);
    }
}

export async function logout(dispatch) {
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
}
