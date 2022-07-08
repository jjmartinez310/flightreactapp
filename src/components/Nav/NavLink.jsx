import styled from "styled-components";
import { Link } from "react-router-dom";

// Style components to use them as a function
export const NavLink = styled(Link)`
    color: inherit; /* Use the color that the parent element is using */
    text-decoration: none;
    transition: color 0.25s;

    /* Applies hover effect to the css class we're making currently */
    &:hover {
        color: ${({transitionColor}) => transitionColor ?? 'lightgray'};
    }
`;