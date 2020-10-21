import React from "react";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from "styled-components";

const LinkButton = styled.div` 
    padding: 15% 0;
    &:hover {
        cursor: pointer;
    }
    font-size: 1rem;
`


function NavBar(props) {
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
                <LinkButton onClick={() => push('/')}>Home Page</LinkButton>
            </nav>
            }

        </div>
    )
}

export default NavBar;