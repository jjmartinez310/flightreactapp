import { useContext} from 'react';
import  ThemeContext from '../contexts/ThemeContext';
import { Nav, NavItem, NavLink, NavSection} from '../components/Nav';


// This is an opinionated NavBar
export const AppNav = () => {
    const theme = useContext(ThemeContext);
    return (
        <Nav backgroundColor={theme.backgroundColor} color={theme.color}>
            <NavSection jc="flex-start">
                <NavItem>
                    <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/flights">Book Flight</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/edit">Delete Flight</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/change">Change Flight</NavLink>
                </NavItem>
            </NavSection>
            <NavSection jc="flex-end">
            </NavSection>
        </Nav>
    );
}