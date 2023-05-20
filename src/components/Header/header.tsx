import { useDispatch } from 'react-redux'

import { logout } from '../../features/auth-slice.tsx/authSlice'


const Header = () => {
    const dispatch = useDispatch();
    
    return <div style={{display:'flex',justifyContent:'flex-end'}}><button onClick={()=> dispatch(logout())}>Salir </button></div>
}

export default Header