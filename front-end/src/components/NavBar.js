import React from "react";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from "styled-components";
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const StyledNav = styled.nav`
    .menu-button {
        color: white;
        padding: 20% 0;
        &:hover {
            cursor: pointer;
            color: var(--aqua);
        }
        font-size: 1rem;
        letter-spacing: 0.1rem;
    }
`
const StyledList = styled.div`
    background-color: var(--aqua);
    height: 100vh;
    width: 20vw;
    padding-top: 2%;
    .MuiTypography-body1 {
        color: white;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        font-family: 'Open Sans', Helvetica, sans-serif;
    }
    .list-item {
        border-bottom: 1px solid rgb(21, 124, 116, 0.5);
        width: 80%;
        margin: 0 auto;
    }
    .close-list {
        color: white;
        margin: 0 86%;
        font-size: 1.4rem;
        font-family: 'Raleway', sans-serif;
        &:hover {
            cursor:pointer;
        }
    }
`

function NavBar(props) {
    const marketing = `build-week-1-a19ugbcgs.vercel.app/index.html`
    const { push } = useHistory();
    const admin = useSelector(state => state.registerReducer.admin);
    const student = useSelector(state => state.registerReducer.student);
    const volunteer = useSelector(state => state.registerReducer.volunteer);
    // const dispatch = useDispatch();
    const [state, setState] = React.useState({
        top: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

    const publicList = (anchor) => (
        <StyledList
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List >
            <div className="close-list" onClick={toggleDrawer("right", false)}>X</div>
            {['Home'].map((text, index) => (
                <ListItem 
                    className="list-item" 
                    button 
                    key={text}
                    onClick={() => push(`/`)}
                >
                    <ListItemText className="list-text" primary={text} />
                </ListItem>
            ))}
            </List>
        </StyledList>
    );

    const privateList = (anchor) => (
        <StyledList
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List >
            <div className="close-list" onClick={toggleDrawer("right", false)}>X</div>
            {['dashboard', 'profile'].map((text, index) => (
                <ListItem 
                    className="list-item" 
                    button 
                    key={text}
                    onClick={() => push(`/${text}`)}
                >
                    <ListItemText className="list-text" primary={text} />
                </ListItem>
            ))}
            </List>
        </StyledList>
    );
    
    return(
        <div className="navContainer">
            {(admin || student || volunteer)
                
                ?

                <StyledNav>
                    <React.Fragment key={"right"}>
                        <Button className="menu-button" onClick={toggleDrawer("right", true)}>Menu</Button>
                        <Drawer
                            anchor={"right"}
                            open={state["right"]}
                            onClose={toggleDrawer("right", false)}
                        >
                            {privateList("right")}
                        </Drawer>
                    </React.Fragment>
                </StyledNav>

                :

                <StyledNav>
                    <React.Fragment key={"right"}>
                        <Button className="menu-button" onClick={toggleDrawer("right", true)}>Menu</Button>
                        <Drawer
                            anchor={"right"}
                            open={state["right"]}
                            onClose={toggleDrawer("right", false)}
                        >
                            {publicList("right")}
                        </Drawer>
                    </React.Fragment>
                </StyledNav>
            }
        </div>
    )
}

export default NavBar;