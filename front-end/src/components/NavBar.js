import React from "react";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const NavBar=()=> {
    const marketing = `build-week-1-a19ugbcgs.vercel.app/index.html`
    const { push } = useHistory();
    const admin = useSelector(state => state.registerReducer.admin);
    const student = useSelector(state => state.registerReducer.student);
    const volunteer = useSelector(state => state.registerReducer.volunteer);
    // const dispatch = useDispatch();
    
  
    return(
        <div className="navContainer">
            { (admin || student || volunteer) 
            
            ?

            <nav>
                <button onClick={() => push('/dashboard')}>Dashboard</button>
                <button onClick={() => push('/profile')}>Profile</button>
            </nav>

            :

            <nav>
                <button onClick={() => push('/')}>Home Page</button>
            </nav>
            }

        </div>
    )
}

