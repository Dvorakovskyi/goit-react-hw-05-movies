import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    font-size: 16px;
    text-decoration: none;
    color: black;

    &:hover,
    &:focus {
        color: #d12b19;
    }
`;

export const StyledItem = styled.li`
    margin-bottom: 3px;
`;