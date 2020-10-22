import React from "react";
import { useHistory } from 'react-router-dom';

export const NavBar=()=> {
    const marketing = `build-week-1-a19ugbcgs.vercel.app/index.html`
    const { push } = useHistory();
    
  
    return(
        <div className="navContainer">
            <nav>
                {/* <button onClick={() => push('/profile')}>Profile</button> */}
                <button onClick={() => push('/')}>Home Page</button>
            </nav>
        </div>
    )
}

