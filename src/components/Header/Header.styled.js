import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

export const StyledNavLink = styled(NavLink)`
    padding-top: 20px;
    padding-bottom: 20px;
    margin-right: 15px;
    font-size: 24px;
    font-weight: 600;
    color: black;
    text-decoration: none;

    &:hover,
    &:focus {
        color: #d12b19;
    }

    &.active {
        color: #d12b19;
    }
`;