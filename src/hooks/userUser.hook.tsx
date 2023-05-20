/* import { useDispatch } from 'react-redux' */


import ApiLogin from '../services/ApiLogin'

import {
    logout
} from '../features/auth-slice.tsx/authSlice'
const userUser = () => {



    const loginUser = (email: String, password: String) => {
        const data = { email, password };
        ApiLogin(data).then(d => {
            console.log(d)
        }).catch(error=>{console.log(error)})
    }
    const logoutUser = () => {
        /* dispatch(logout()) */
    }
    return { loginUser, logoutUser }
}

export default userUser