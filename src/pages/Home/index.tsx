
import { useSelector } from "react-redux"
import { selectCurrentUser } from "../../features/auth-slice.tsx/authSlice"

import { Link } from "react-router-dom";

export const Home = () => {
    const user = useSelector(selectCurrentUser);

    const welcome = user ? `Welcome ${user}!` : 'Welcome '
    const contentHome = (
        <div>
            <h1>{welcome}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi veniam cum expedita inventore,
                vel facere quod repellendus doloremque amet autem soluta blanditiis nam, iure, unde sapiente
                impedit ducimus quam accusantium.</p>
                <Link to={"/infoSeller"}>Send CrudToCrud</Link>
                
        </div>
    )
    return  contentHome
    
}