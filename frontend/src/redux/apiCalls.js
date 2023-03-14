import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import axios from "axios";

export const login = (dispatch, user) => {
    dispatch(loginStart());
    try {
        axios
            .post('auth/login',{email:user.email , password: user.password})
            .then((res)=> dispatch(loginSuccess(res.data)) )
            .catch((err) => console.log(err));
    } catch (err) {
        dispatch(loginFailure());
    }
}

